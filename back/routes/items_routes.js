const express = require("express");
const router = express.Router();
const itemsCtrl = require("../controllers/items_ctrl");
const auth = require("../middlewares/auth");
const { uploadItems } = require("../middlewares/multer-config");

router.get("/", itemsCtrl.getItems);
router.get("/:uuid", itemsCtrl.getOneItem);
router.post("/", auth, itemsCtrl.createItem);
router.post("/images", auth, uploadItems, itemsCtrl.addImage);
router.put("/:uuid", auth, itemsCtrl.updateItem);
router.put("/images/:uuid/:imgUuid", auth, uploadItems, itemsCtrl.updateItemImage);
router.delete("/:uuid", auth, itemsCtrl.deleteItem);
router.delete("/images/:uuid/:imgUuid", itemsCtrl.deleteItemImg);

module.exports = router;