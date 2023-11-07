import express from 'express';
import ProductController from '../controllers/product.controller.js';
import upload from '../../../middlewares/fileupload.middleware.js';

const router = express.Router();



router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.deleteProduct)
router.post('/:id/update_quantity/',ProductController.updateQuantity);
router.post('/create',ProductController.addProduct);




export default router;