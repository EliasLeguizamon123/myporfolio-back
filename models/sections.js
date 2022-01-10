const mongoose = require('mongoose');
const { Schema } = mongoose;

const sectionSchema = new Schema({
    title: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Section', sectionSchema);