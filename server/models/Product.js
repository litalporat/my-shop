const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 50,
    validate: {
      validator: v => v.length > 0 && v.length < 50,
      message: props => `${props.value} length is not valid!`
    }
  },
  description: {
    type: String,
    required: true,
  },
  color: [String],
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number
  },
  stock: {
    type: Object,
    required: true,
    xs: {
      type: Number,
    },
    s:  {
      type: Number,
    },
    m:  {
      type: Number,
    },
    l:  {
      type: Number,
    },
    os:  {
      type: Number,
    },
    xl:  {
      type: Number,
    }
  },
  type: {
    required: true,
    type: String
  },
  imgDisplay: {
    type: [String],
    required: true,
  },
  imgDetails: {
    type: [String],
    required: true,
  },
  amountSold: {
    type: Number
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => new Date()
  },
  updatedAt: {
    type: Date,
    default: () => new Date()
  }
});

productSchema.virtual('globalStock').get(function() {
  return Object.values(this.stock).reduce((acc, a) => acc + a, 0);
});

productSchema.virtual('availableSizes').get(function() {
  return Object.keys(this.stock);
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
