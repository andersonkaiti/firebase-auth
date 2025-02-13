import { Router } from "express";
import { IndexController } from "@controllers/index-controller.ts";

const router = Router();
const indexController = new IndexController();

router.get("/", indexController.get);

export { router as indexRoutes };
