const { Schema, model } = require('mongoose');

const Product = require('./Product');

const beerSchema = new Schema({
    productInformation: {
        type: Product.schema,
        required: true,
    },
    description: {
        type: String
    },
    brewery: {
        type: String
    },
    country: {
        type: String
    },
    packSize: {
        type: Number,
        min: 1,
        required: true
    },
    volume: {
        type: Number,
        min: 0
    },
    alcoholContent: {
        type: Number,
        min: 0
    }
});

const Beer = model('Beer', beerSchema);

module.exports = Beer;