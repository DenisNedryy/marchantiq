const express = require("express");
const router = express.Router();
const mailsCtrl = require("../controllers/mails_ctrl");

router.post("/", mailsCtrl.sendMail);

module.exports = router; 