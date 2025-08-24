const urlModel = require('../models/url.model');
const generateSlug = require('../utils/generateSlug');



module.exports.shortenUrl = async (req, res) => {
    
    const { originalUrl } = req.body;
    if (!originalUrl) {
        return res.status(400).json({ error: 'Original URL is required' });
    }


    while(true){
        const slug = generateSlug(8);
        var shortUrl = `${process.env.BASE_URL}/${slug}`;
        const alreadyExists = await urlModel.findOne({ shortUrl });
        if(!alreadyExists){
            break;
        }
    }
    

    try {
        const newUrl = await urlModel.create({ originalUrl, shortUrl });
        return res.status(201).json({ newUrl });
    }
    catch (err) {
        console.error('Error creating short URL:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports.redirectToOriginal = async (req, res) => {
    const { shortcode } = req.params;
    const shortUrl = `${process.env.BASE_URL}/${shortcode}`;

    try {
        const url = await urlModel.findOne({ shortUrl });
        if (!url) {
            return res.status(404).json({ error: 'Short URL not found' });
        }
        await urlModel.findByIdAndUpdate(url._id, { $inc: { clicks: 1 } });
        console.log(url);
        return res.redirect(url.originalUrl);

    }
    catch (err) {
        console.error('Error redirecting to original URL:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};