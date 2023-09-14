const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const NouvelleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date : {
        type: Date,
        required: true
    },
    description: String,
    image : String,
});

const Nouvelle = mongoose.model('Nouvelle', NouvelleSchema);

module.exports = Nouvelle;