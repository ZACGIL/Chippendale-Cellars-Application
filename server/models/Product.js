const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    imagePath: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    quantity: {
        type: Number,
        min: 0,
        default: 1
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subcategory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subcategory'
        }
    ],
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

const Product = model('Product', productSchema);

module.exports = Product;