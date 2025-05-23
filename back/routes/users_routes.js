const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const userCtrl = require("../controllers/users_ctrl");

router.get('/test', userCtrl.testUser);
router.post('/signUp', userCtrl.signUp);
router.post('/signIn', userCtrl.signIn);

module.exports = router;