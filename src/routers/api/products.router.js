import { Router } from "express";
import {
  create,
  read,
  readById,
  updateById,
  destroyById,
} from "../../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", create);
productsRouter.get("/", read);
productsRouter.get("/:pid", readById);
productsRouter.put("/:pid", updateById);
productsRouter.delete("/:pid", destroyById);

export default productsRouter;
