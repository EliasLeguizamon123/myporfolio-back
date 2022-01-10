const mongoose = require('mongoose');
const { Schema } = mongoose;

const tecnologiesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
  });
module.exports = mongoose.model('Tecnologies', tecnologiesSchema);