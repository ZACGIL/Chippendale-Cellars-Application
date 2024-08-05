const { Schema, model } = require('mongoose');

const Product = require('./Product');

const subcategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    products: [Product.schema]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

subcategorySchema
  .virtual('productsTotal')
  .get(function () {
    return this.products.length;
  }
  );

const Subcategory = model('Subcategory', subcategorySchema);

module.exports = Subcategory;