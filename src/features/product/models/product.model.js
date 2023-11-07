import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

// Check if there are any documents in the Product collection
Product.countDocuments()
    .then(count => {
        if (count === 0) {
            // Default products to be created only if no documents exist
           const products = [
            new Product({name: 'Apple', price: 1.99, quantity: 10}),
            new Product({name: 'Orange', price: 2.99, quantity: 20}),
            new Product({name: 'Banana', price: 3.99, quantity: 30}),
            new Product({name: 'Mango', price: 4.99, quantity: 40}),
           ]
           return Product.create(products)
        }
    })
    .catch(err => {
        console.error('Error:', err);
    });

export default Product;
