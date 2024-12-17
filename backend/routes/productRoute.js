import express from "express";
import {
  addProduct,
  getProductById,
  getAllProducts,
  editProduct,
  deleteProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.get("/products", getAllProducts);
productRouter.get("/product/:id", getProductById);
productRouter.put(
  "/product/:id",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  editProduct
);
productRouter.delete("/product/:id", adminAuth, deleteProduct);
productRouter.post(
  "/product",
  adminAuth,

  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

export default productRouter;
