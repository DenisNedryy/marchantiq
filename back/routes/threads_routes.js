const express = require("express");
const router = express.Router();
const threadsCtrl = require("../controllers/threads_ctrl");
const auth = require("../middlewares/auth");
const { uploadItems } = require("../middlewares/multer-config");

router.post("/", auth, threadsCtrl.createThreads);
router.post("/:uuid", auth, uploadItems, threadsCtrl.createThreadImg);
router.put("/:uuid", auth, threadsCtrl.updateThreads);
router.put("/:uuid", auth, uploadItems, threadsCtrl.updateThreadImg);
router.delete("/:uuid", auth, threadsCtrl.deleteThreads);


module.exports = router; 