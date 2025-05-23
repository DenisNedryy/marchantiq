const pool = require("../connection/sqlConnection");
const { v4: uuidv4 } = require("uuid");
const fs = require('fs').promises;


exports.getItems = async (req, res, next) => {
    try {
        // Récupère tous les items
        const [items] = await pool.execute("SELECT * FROM items");

        if (items.length === 0) {
            return res.status(200).json({ items: [] });
        }

        // Récupère toutes les images associées aux items
        const itemIds = items.map(item => item.id);
        const [images] = await pool.execute(
            `SELECT * FROM items_images WHERE item_id IN (${itemIds.map(() => '?').join(',')}) ORDER BY position ASC`,
            itemIds
        );

        // Associe les images à chaque item
        const itemsWithImages = items.map(item => {
            item.images = images.filter(image => image.item_id === item.id);
            return item;
        });

        return res.status(200).json({ items: itemsWithImages });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getOneItem = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const [items] = await pool.execute("SELECT * FROM items WHERE uuid = ?", [uuid]);
        if (items.length === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }
        const item = items[0];

        // Récupérer les images associées à cet item
        const [images] = await pool.execute("SELECT * FROM items_images WHERE item_id = ? ORDER BY position ASC", [item.id]);

        // Ajouter les images à l'objet item
        item.images = images;

        return res.status(200).json({ items: item });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

exports.createItem = async (req, res, next) => {
    try {
        // Récupération des données
        const { name, price, artist, state, matiere, longeur, largeur, hauteur, diam, profondeur, style, epoque, year, category, description, isNew } = req.body;

        // Vérification des champs nécessaires
        if (!name || !price || !category) {
            return res.status(400).json({ msg: "name, price, category sont obligatoires" });
        }
        const fileName = req.file ? req.file.filename : null;

        // Création de l'objet recipe
        const itemData = {
            uuid: uuidv4(),
            user_id: req.auth.userId,
            name,
            price,
            category,
            artist: artist || null,
            state: state || null,
            matiere: matiere || null,
            longeur: longeur || null,
            largeur: largeur || null,
            hauteur: hauteur || null,
            diam: diam || null,
            profondeur: profondeur || null,
            style: style || null,
            epoque: epoque || null,
            year: year || null,
            description: description || null,
            isNew: isNew || null,
            img_url: fileName || "imageParDefault"
        };

        // Construction de la requête pour insérer l'item
        const columns = Object.keys(itemData);
        const values = Object.values(itemData);
        const placeholders = columns.map(() => "?").join(", ");

        const query = `INSERT INTO items (${columns.join(', ')}) VALUES (${placeholders})`;

        // Exécution de la requête
        await pool.execute(query, values);

        // Réponse de succès
        res.status(201).json({ msg: "Item created successfully" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ err });
    }
};

exports.addImage = async (req, res, next) => {
    try {
        const item_uuid = req.body.item_uuid;

        //Récupération de l'auth
        const [user] = await pool.execute('SELECT * FROM users u WHERE u.id = ?', [req.auth.userId]);
        const [item] = await pool.execute('SELECT * FROM items WHERE uuid = ?', [item_uuid]);

        if (!item || !user || user[0].id !== item[0].user_id) throw new Error("Impossible d'identifier l'item");

        const fileName = req.file ? req.file.filename : null;
        if (!fileName) throw new Error("Pas d'image");

        // crééer une uuid  pour le item_images
        const uuid = uuidv4();

        await pool.execute("INSERT INTO items_images(uuid, item_id, image_url) VALUES(?, ?, ?)", [uuid, item[0].id, fileName]);

        res.status(201).json({ msg: "image créé" });

    } catch (err) {
        return res.status(401).json({ erreur: err.message });
    }
};


exports.updateItem = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        // Récupération des données
        const { name, price, artist, state, matiere, longeur, largeur, hauteur, diam, profondeur, style, epoque, year, category, description, isNew } = req.body;

        const fileName = req.file ? req.file.filename : null;

        // Création de l'objet recipe
        const itemData = {
            name: name || null,
            price: price || null,
            category: category || null,
            artist: artist || null,
            state: state || null,
            matiere: matiere || null,
            longeur: longeur || null,
            largeur: largeur || null,
            hauteur: hauteur || null,
            diam: diam || null,
            profondeur: profondeur || null,
            style: style || null,
            epoque: epoque || null,
            year: year || null,
            description: description || null,
            isNew: isNew || null,
            img_url: fileName || null
        };

        // Construction de la requête pour insérer l'item
        let columns = Object.keys(itemData);
        let values = Object.values(itemData);
        columns = Object.keys(itemData).filter((cell) => itemData[cell] !== null);
        values = Object.values(itemData).filter((cell) => cell !== null);
        const placeholders = columns.map((cell) => `${cell} = ?`).join(", ");
        values.push(uuid);

        // 'update items set name = ? '

        const query = `UPDATE items SET ${placeholders} WHERE uuid = ?`;

        // Exécution de la requête
        await pool.execute(query, values);

        // Réponse de succès
        res.status(201).json({ msg: "Item has been modified !" });

    } catch (err) {
        return res.status(500).json({ erreur: err });
    }
};

exports.updateItemImage = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const imgUuid = req.params.imgUuid;
        const fileName = req.file ? req.file.filename : null;;

        // Récupération de l'item associé à l'image
        const [items] = await pool.execute(`SELECT * FROM items WHERE uuid = ?`, [uuid]);
        const item = items[0];
        if (!item) return res.status(404).json({ erreur: "Item introuvable" });

        // Vérification que l'image existe
        const [imgs] = await pool.execute(`SELECT * FROM items_images WHERE item_id = ? && uuid = ?`, [item.id, imgUuid]);
        const img = imgs[0];


        if (!img) return res.status(404).json({ erreur: "Image introuvable" });

        // Si file, suppression de l'image
        if (fileName && img) {
            try {
                await fs.unlink(`uploads/pictures/items/${img.image_url}`);
            } catch (err) {
                console.error("Erreur lors de la suppression de l'ancienne image:", err);
                return res.status(500).json({ msg: "Error deleting old image", error: err });
            }
        }

        res.status(200).json({ msg: "Image modifiée" });


    } catch (err) {
        return res.status(500).json({ erreur: err });
    }
};

exports.deleteItem = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;

    } catch (err) {
        return res.status(500).json({ erreur: err });
    }
};

exports.deleteItemImg = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;

    } catch (err) {
        return res.status(500).json({ erreur: err });
    }
};