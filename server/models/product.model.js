import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String, 
    trim: true, // Add trim to remove whitespace
    required: [true, 'Name is required'] // Custom error message
  },
  description: {
    type: String, 
    trim: true, // Add trim to remove whitespace
    required: [true, 'Description is required'] // Custom error message
  },
  price: {
    type: Number, 
    required: [true, 'Price is required'], // Custom error message
    min: 0 // Minimum value
  },
  quantity: {
    type: Number, 
    required: [true, 'Quantity is required'], // Custom error message
    min: 0 // Minimum value
  },
  category: {
    type: String, 
    trim: true, // Add trim to remove whitespace
    required: [true, 'Category is required'] // Custom error message
  }
});

export default mongoose.model('Product', ProductSchema); // Changed to ES6 export
