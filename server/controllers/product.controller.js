


import _ from 'lodash'
import errorHandler from './error.controller.js'
import Product from '../models/product.model.js'



// Create a new product
export const create = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    return res.status(200).json({
      message: "Successfully product created!"
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Load product and append to req.
export const productByID = async (req, res, next, id) => {
  try {
    let product = await Product.findById(id);
    if (!product) {
      return res.status('400').json({
        error: "Product not found"
      });
    }
    req.profile = product;
    next();
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve product"
    });
  }
};

// Read a product
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: errorHandler.getErrorMessage(error) });
  }
};

// Update a product
export const update = async (req, res) => {
  try {
    let product = req.profile;
    product = _.extend(product, req.body);
    product.updated = Date.now();
    await product.save();
    res.json(product);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Delete a product
export const remove = async (req, res) => {
  try {
    let product = req.profile;
    let deletedProduct = await product.remove();
    res.json(deletedProduct);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Delete all products
export const removeAll = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: 'All products have been deleted successfully.' });
  } catch (err) {
    return res.status(500).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Find product with keyword
export const listBySearch = async (req, res) => {
  const query = {};
  if (req.query.search) {
    query.name = { $regex: req.query.search, $options: 'i' };
    // If you want to include description in the search as well:
    // query.$or = [
    //   { name: { $regex: req.query.search, $options: 'i' } },
    //   { description: { $regex: req.query.search, $options: 'i' } }
    // ];
  }

  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Export the controller methods
export default { create, productByID, getAllProducts, remove, update, removeAll, listBySearch };
