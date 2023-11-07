import express from 'express';
import ProductRouter from './src/features/product/routes/product.routes.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const server = express();


//? Middleware to parse the request body
server.use(bodyParser.json());



//? Middleware to parse the urlencoded data
server.use(express.urlencoded({extended:true}));


//? Routing All request for products to ProductRouter   
server.use('/products', ProductRouter);

//? Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce_api_skilltest');
export const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected successfully to MongoDB");
});




server.get('/',(req,res)=>{
    res.send("Welcome to Ecommerce API")
})

server.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is running on port 3000")
});
