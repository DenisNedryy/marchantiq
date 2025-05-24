const express = require("express");
const router = express.Router();
const newsCtrl = require("../controllers/news_ctrl");
const auth = require("../middlewares/auth");
const { uploadItems } = require("../middlewares/multer-config");

router.get("/", newsCtrl.getNews);
router.get("/:uuid", newsCtrl.getOneNews);
router.post("/", auth, uploadItems, newsCtrl.createNews);
router.put("/:uuid", auth, uploadItems, newsCtrl.updateNews);
router.delete("/:uuid", auth, newsCtrl.deleteNews);

module.exports = router; 