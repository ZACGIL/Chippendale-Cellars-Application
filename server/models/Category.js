const { Schema, model } = require('mongoose');

const Product = require('./Product');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

categorySchema
  .virtual('productsTotal')
  .get(function () {
    return this.products.length;
  }
  );

const Category = model('Category', categorySchema);

module.exports = Category;
