const pool = require("../connection/sqlConnection");
const { v4: uuidv4 } = require("uuid");
const fs = require('fs').promises;

exports.getNews = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const [news] = await pool.execute("SELECT * FROM news");
        if (news.length === 0) {
            throw new Error("News empties");
        }
        return res.status(200).json({ news: news });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.getOneNews = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const [news] = await pool.execute("SELECT * FROM news WHERE uuid = ?", [uuid]);
        if (news.length === 0) {
            throw new Error("News empties");
        }
        const oneNews = news[0];
        return res.status(200).json({ oneNews: oneNews });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.createNews = async (req, res, next) => {
    try {
        const { titre, category, description } = req.body;
        if (!titre || !category || !description) throw new Error("Veuillez remplir tous les champs");

        const fileName = req.file ? req.file.filename : null;
        if (!fileName) throw new Error("Image obligatoire");

        const uuid = uuidv4();

        await pool.execute("INSERT INTO news (uuid, titre, category, description, img_principale) VALUES(?, ?, ?, ?, ?)", [uuid, titre, category, description, fileName]);

        res.status(201).json({ msg: "News created !" });

    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
};

exports.updateNews = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;

        const [news] = await pool.execute("SELECT * FROM news WHERE uuid = ?", [uuid]);
        const currentNews = news[0];
        if (!currentNews) throw new Error("News introuvable");

        const { titre, category, description } = req.body;
        const fileName = req.file ? req.file.filename : null;

        const newsData = {
            titre: titre | null,
            category: category || null,
            description: description || null,
            image_principale: fileName || null
        }

        const keys = Object.keys(newsData);
        const values = Object.values(newsData);
        const currentKeys = Object.keys.filter((key)=>newsData[key]!==null);
        const currentValues = Object.values.filter((value)=>value!==null);

        const placeHolder = 

        await pool.execute("UPDATE news ")


    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteNews = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;

        const [news] = await pool.execute("SELECT * FROM news WHERE uuid = ?", [uuid]);
        const currentNews = news[0];
        if (!currentNews) throw new Error("News introuvable");

        await fs.unlink(`uploads/pictures/items/${currentNews.img_principale}`);
        await pool.execute("DELETE FROM news WHERE uuid = ?", [uuid]);

        res.status(200).json({ msg: "News deleted with success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};