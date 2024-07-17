import { Router } from "express";
import productRoutes from "./productRoutes";

const router = Router();

router.use(productRoutes);

export default router;
