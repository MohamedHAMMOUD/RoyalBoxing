const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const DisciplineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    image : String,
});

DisciplineSchema.plugin(uniqueValidator);
const Discipline = mongoose.model('Discipline', DisciplineSchema);

module.exports = Discipline;