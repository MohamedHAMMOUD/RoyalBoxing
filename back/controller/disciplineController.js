const Discipline = require('../models/discipline'); 

async function getAll(req, res) {
    try {
        const disciplines = await Discipline.find();
        res.json(disciplines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAll
}