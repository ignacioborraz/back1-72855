import { Router } from "express";
import {
  addProductToCart,
  readProductsByUser,
  updateQuantity,
  removeProductFromCart,
} from "../../controllers/carts.controller.js";

const cartsRouter = Router();

cartsRouter.post("/", addProductToCart);
cartsRouter.get("/users/:uid", readProductsByUser);
cartsRouter.put("/:cid", updateQuantity);
cartsRouter.delete("/:cid", removeProductFromCart);

export default cartsRouter;
