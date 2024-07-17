import express from "express";
import { ProductController } from "../controllers/ProductController";
import { ProductInteractor } from "../interactors/ProductInteractor";
import { ProductRepository } from "../repositories/productRepository";
import { Mailer } from "../external-libraries/mailer";
import { MessageBroker } from "../external-libraries/messageBroker";

const router = express.Router();

const repository = new ProductRepository();
const mailer = new Mailer();
const broker = new MessageBroker();

const interactor = new ProductInteractor(repository, mailer, broker);

const controller = new ProductController(interactor);

router.post("/products", controller.onCreateProduct.bind(controller));
router.get("/products", controller.onGetProducts.bind(controller));
router.patch("/products/:id", controller.onUpdateStock.bind(controller));

export default router;
