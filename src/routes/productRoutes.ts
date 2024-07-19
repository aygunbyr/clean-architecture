import express from 'express';

import container from '../inversify.config';
import { ProductController } from '../controllers/ProductController';
import { INTERFACE_TYPE } from '../utils';

const controller = container.get<ProductController>(
  INTERFACE_TYPE.ProductController
);

const router = express.Router();

router.post('/products', controller.onCreateProduct.bind(controller));
router.get('/products', controller.onGetProducts.bind(controller));
router.patch('/products/:id', controller.onUpdateStock.bind(controller));

export default router;
