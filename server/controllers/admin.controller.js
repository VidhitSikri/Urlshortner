const urlModel = require('../models/url.model');

module.exports.getAllUrls = async(req, res) => {
    try {
        const urls = await urlModel.find().sort({ createdAt: -1 });
        return res.status(200).json({ urls });
    } catch (err) {
        console.error('Error fetching URLs:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}