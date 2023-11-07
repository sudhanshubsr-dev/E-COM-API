import Product from "../models/product.model.js";

export default class ProductController{
    static getAllProducts(req, res){
        Product.find({})
        .then(products => {
            res.status(200).json({products})
        }).catch(err => {
            res.status(500).json({message:err.message})
        });
    }

    static addProduct(req, res){
        const {name,price,quantity} = req.body;
        const newProduct = {
            name,
            price,
            quantity
        };
        console.log(newProduct);
        // res.status(201).json(newProduct);
        Product.create(newProduct)
        .then(product => {
            res.status(201).json({product})
        }).catch(err => {
            res.status(500).json({message:err.message})
        });
       
    }


        static updateQuantity(req, res){
            const quantity = req.query.number;
            console.log(req.query);
            const {id} = req.params;
            Product.findByIdAndUpdate(id, {quantity:quantity})  
            .then(product => {
                res.status(200).json({product
                ,message:"Quantity updated successfully"})
            }).catch(err => {
                res.status(500).json({message:err.message})
            });

    }

    static deleteProduct(req, res){
        Product.findByIdAndDelete(req.params.id)
        .then(product => {
            res.status(200).json({product,
            message:"Product deleted successfully"})
        }).catch(err => {
            res.status(500).json({message:err.message})
        });
}

}