const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  display_name: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 15,
    validate: {
      validator: v => v.length > 0 && v.length < 15,
      message: props => `${props.value} length is not valid!`
    }
  },
  description: {
    type: [String],
    required: true,
  },
  more_info: {
    type: Object,
    materials: [String],
    origin: String,
    model_size: String,
    model_height: Number,
    instructions: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number
  },
  stock: {
    required: true,
    xs: {
      type: Number,
      default: 0
    },
    s:  {
      type: Number,
      default: 0
    },
    m:  {
      type: Number,
      default: 0
    },
    l:  {
      type: Number,
      default: 0
    },
    os:  {
      type: Number,
      default: 0
    },
    xl:  {
      type: Number,
      default: 0
    }
  },
  type: {
    required: true,
    type: String
  },
  images: {
    required: true,
    display: [String],
    details: [String]
  },
  available_sizes: [String],
  search_keywords: [String],
  amount_sold: Number,
  similar_products: [mongoose.SchemaTypes.ObjectId],
  created_at: {
    type: Date,
    immutable: true,
    default: () => new Date()
  },
  updated_at: {
    type: Date,
    default: () => new Date()
  }
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
