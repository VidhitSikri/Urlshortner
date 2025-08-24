const express = require('express');
const router = express.Router();
const { getAllUrls } = require('../controllers/admin.controller'); 

router.get("/urls", getAllUrls);











module.exports = router;