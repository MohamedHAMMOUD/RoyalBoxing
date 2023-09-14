const Instructor = require('../models/instructor'); 

async function getAll(req, res) {
    try {
        const instructors = await Instructor.find();
        res.json(instructors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
  getAll
}