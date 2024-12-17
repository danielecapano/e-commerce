import productModel from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      brand,
      price,
      category,
      sector,
      sizes,
      numberShoes,
      promo,
      discount,
    } = req.body;
    const image1 = req.files.image1?.[0];
    const image2 = req.files.image2?.[0];
    const image3 = req.files.image3?.[0];
    const image4 = req.files.image4?.[0];

    const images = [image1, image2, image3, image4].filter(
      (image) => image !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (image) => {
        let result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    console.log(
      name,
      brand,
      price,
      category,
      sector,
      sizes,
      numberShoes,
      promo,
      discount
    );

    console.log(imagesUrl);

    const productData = {
      name,
      brand,
      price: Number(price),
      category,
      sector,
      promo,
      discount: Number(discount),
      sizes: JSON.parse(sizes),
      numberShoes: JSON.parse(numberShoes),
      images: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Prodotto aggiunto" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Prodotto non trovato" });
    }
    res.json({ success: true, product });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Prodotto non trovato" });
    }
    const { name, brand, price, category, sector, sizes, bestseller } =
      req.body;

    let uploadedImages = [];
    const imagesToUpdate = ["image1", "image2", "image3", "image4"];

    uploadedImages = await Promise.all(
      imagesToUpdate.map(async (imageKey, index) => {
        const file = req.files?.[imageKey]?.[0]; // Destrutturazione inline per il file
        if (file) {
          // Carica su Cloudinary
          const { secure_url } = await cloudinary.uploader.upload(file.path, {
            resource_type: "image",
          });
          return secure_url; // Ritorna l'URL dell'immagine caricata
        } else {
          // Mantieni immagine esistente o null
          return product.images?.[index];
        }
      })
    );

    const updatedData = {
      name: name ?? undefined,
      brand: brand ?? undefined,
      price: price ? Number(price) : undefined,
      category: category ?? undefined,
      sector: sector ?? undefined,
      sizes: sizes ? JSON.parse(sizes) : undefined,
      bestseller: bestseller !== undefined ? bestseller === "true" : undefined,
      images: uploadedImages.filter((img) => img !== undefined && img !== null),
      lastModified: Date.now(),
    };

    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );

    res.json({
      success: true,
      message: "Prodotto aggiornato",
      product: updatedProduct,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findByIdAndDelete(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Prodotto non trovato" });
    }
    res.json({ success: true, message: "Prodotto eliminato" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export {
  addProduct,
  getProductById,
  getAllProducts,
  editProduct,
  deleteProduct,
};
