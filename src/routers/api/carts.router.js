import { Router } from "express";
import { addProductToCart, readProductsFromUser, updateState, updateQuantity, removeProductFromCart, totalToPay } from "../../controllers/carts.controller.js";

const cartsRouter = Router();

cartsRouter.post("/", addProductToCart);
cartsRouter.get("/users/:user_id", readProductsFromUser);
cartsRouter.put("/:cart_id", updateQuantity);
cartsRouter.put("/:cart_id/:state", updateState);
cartsRouter.delete("/:cart_id", removeProductFromCart);
cartsRouter.get("/total/:user_id", totalToPay)

export default cartsRouter;
