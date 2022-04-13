import { Router } from "express";
import * as controller from "../controllers/controller.js";
import validateSchemaMiddleware from "../middlewares/validateSchema.js";
import schema from "../schemas/schema.js";

const router = Router();
router.post("/battle", validateSchemaMiddleware(schema), controller.postBattle);

export default router;
