const pool = require("../connection/sqlConnection");
const { v4: uuidv4 } = require("uuid");

exports.createThreads = async (req, res, next) => {
    try {
        const { news_uuid, sous_titre, description } = req.body;
        if (!news_uuid || !sous_titre || description) throw new Error("News, sous-titre et description obligatoire");

        const uuid = uuidv4();

        const [news] = await pool.execute("SELECT INTO news WHERE uuid = ?", [news_uuid]);
        if (news.length === 0) throw new Error("News introuvable");
        await pool.execute("INSERT INTO threads (uuid, news_id, sous_titre, description", [uuid, news[0].id, sous_titre, description]);

        return res.status(200).json({ msg: "News ajoutée" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateThreads = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const { sous_titre, description } = req.body;

        const threadsData = {
            sous_titre: sous_titre || null,
            description: description || null
        };

        const keys = Object.keys(threadsData);
        const currentKeys = keys.filter((cell) => threadsData[cell] !== null);
        const values = Object.values(threadsData);
        const currentValues = values.filter((cell) => cell !== null);

        const placeholder = currentKeys.map((cell) => `${cell} = ?`).join(", ");

        await pool.execute(`UPDATE INTO threads SET ${placeholder}`, [currentValues]);

        res.status(200).json({ msg: "Thread modifié" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.deleteThreads = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;

        const [threads] = await pool.execute("SELECT FROM threads WHERE uuid = uuid", [uuid]);
        const thread = threads[0];
        if (!thread) throw new Error("Thread introuvable");

        await pool.execute("DELETE FROM threads WHERE uuid = ?", [uuid]);

        res.status(200).json({ msg: "Threads supprimé" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createThreadImg = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const [threads] = await pool.execute("SELECT * FROM threads WHERE uuid = ?", [uuid]);
        if (threads.length === 0) throw new Error("Threads introuvable");
        const thread = threads[0];
        const { commentaire } = req.body;

        const fileName = req.file ? req.file.filename : null;
        if (!fileName) throw new Error("Image obligatoire");

        const threadImgUuid = uuidv4();

        await pool.execute("INSERT INTO threads_images(uuid, thread_id, image_url, commentaire) VALUES (?, ?, ?, ?)", [threadImgUuid, thread.id, fileName, commentaire]);

        res.status(200).json({ msg: "Thread complémentaire ajouté" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateThreadImg = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const fileName = req.file ? req.file.filename : null;
        const { commentaire } = req.body;

        const [threadsImg] = await pool.execute("SELECT * FROM threads_images WHERE uuid = ?", [uuid]);
        if (threadsImg.length === 0) throw new Error("Thread complémentaire introuvable");
        const threadImg = threadsImg[0];



        const data = {
            image_url: fileName || null,
            commentaire: commentaire || null
        };

        if (fileName) await fs.unlink(`uploads/pictures/items/${threadImg.image_url}`);

        const keys = Object.keys(data);
        const currentKeys = keys.filter((cell) => data[cell] !== null);
        const values = Object.values(data);
        const currentValues = values.filter((cell) => cell !== null);

        const placeholder = currentKeys((cell) => `${cell} = ?`).join(", ");

        await pool.execute(`UPDATE INTO threads_images SET ${placeholder} WHERE uuid = ?`, [currentValues]);

        res.status(200).json({ msg: "Thread complémentaire mis à jour !" })
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.deleteThreadImg = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const [threadsImg] = await pool.execute("SELECT * FROM threads_images WHERE uuid = ?", [uuid]);
        if (threadsImg.length === 0) throw new Error("Thread complémentaire introuvable");
        const threadImg = threadsImg[0];

        await fs.unlink(`uploads/pictures/items/${threadImg.image_url}`);

        await pool.execute("DELETE FROM threads_images WHERE uuid = ?", [uuid]);

        res.status(200).json({ msg: "Thread complémentaire supprimé" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};