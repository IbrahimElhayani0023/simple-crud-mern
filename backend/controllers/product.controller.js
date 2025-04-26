import { json } from "express";
import { Product } from "../models/Product.js";

export const createProduct = async (req, res) => {
    const { name, discription, price } = req.body;

    try {
        if (!name || !price || !discription) return res.status(400).json({ message: 'Please fill in all fields' });
        const product = new Product({ name, discription, price });
        product.save();
        return res.status(201).json({
            message: "product created successfuly",
            product
        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

export const showProduct = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) return res.status(404).json({ message: "No products found" });
        return res.status(200).json({
            message: "Products found",
            products
        })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, discription, price } = req.body;
    try {
        if (!name || !price || !discription) return res.status(400).json({ message: 'Please fill in all fields' });
        const product = await Product.findByIdAndUpdate(id, { name, discription, price }, { new: true });
        return res.status(200).json({
            message: "Product updated successfuly",
            product
        })
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        return res.status(200).json({ message: "Product deleted successfuly" })
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }

}