import express from "express";
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from "../controllers/product.js";

const route = express.Router();

route.get("/product", getProduct);
route.get("/product:id", getProductById);
route.get("/product", createProduct);
route.get("/product:id", updateProduct);
route.get("/product:id", deleteProduct);

export default route;