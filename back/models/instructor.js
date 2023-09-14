const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const InstructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    image : String,
});

InstructorSchema.plugin(uniqueValidator);
const Instructor = mongoose.model('Instructor', InstructorSchema);

module.exports = Instructor;