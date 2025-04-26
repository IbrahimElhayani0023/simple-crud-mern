import express from "express";
import { createProduct, showProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js"

const router = express.Router();

router.post("/product", createProduct);
router.get("/product", showProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);


export default router;