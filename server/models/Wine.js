const { Schema, model } = require('mongoose');

const Product = require('./Product');

const wineSchema = new Schema({
    productInformation: {
        type: [Product.schema],
        required: true,
    },
    description: {
        type: String
    },
    varietal: {
        type: String
    },
    producer: {
        type: String
    },
    region: {
        type: String
    },
    country: {
        type: String
    },
    vintage: {
        type: String
    },
    volume: {
        type: Number,
        min: 0,
        default: 750
    },
    natural: {
        type: Boolean,
        default: false
    },
    alcoholContent: {
        type: Number,
        min: 0
    }
});

const Wine = model('Wine', wineSchema);

module.exports = Wine;