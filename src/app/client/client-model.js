const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: {
        type: String
    }
});

const clientSchema = mongoose.Schema({
    name: {
        type: String,
    },

    sex: {
        type: String,
        enum: ['Homem', 'Mulher', 'Outros']
    },

    birthday: {
        type: Date,
    },

    age: {
        type: Number,
    },

    city: citySchema
});

const clientModel = mongoose.model('Client', clientSchema);

module.exports = clientModel;