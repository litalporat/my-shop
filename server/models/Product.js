const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  displayName: {
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
  metadata: {
    type: Object,
    materials: [String],
    origin: String,
    modelSize: String,
    modelHeight: Number,
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
  images: {
    display: [String],
    details: [String]
  },
  amountSold: Number,
  similarProducts: [mongoose.SchemaTypes.ObjectId],
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
