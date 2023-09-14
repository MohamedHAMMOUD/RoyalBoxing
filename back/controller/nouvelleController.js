const News = require('../models/nouvelle'); 

async function getAll(req, res) {
    try {
        const news = await News.find();
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
  getAll
}