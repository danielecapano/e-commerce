import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
  },
  numberShoes: {
    type: Array,
  },
  promo: {
    type: Boolean,
  },
  discount: {
    type: Number,
    default: 0,
  },
  date: {
    type: Number,
    required: true,
  },
});

const productModel = mongoose.models.product || model("product", productSchema);

export default productModel;
