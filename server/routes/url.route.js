const express = require('express');
const router = express.Router();
const { shortenUrl, redirectToOriginal } = require('../controllers/url.controller');

router.post("/api/shorten", shortenUrl);
router.get("/:shortcode", redirectToOriginal);


module.exports = router;