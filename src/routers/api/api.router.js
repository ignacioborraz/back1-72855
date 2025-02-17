import { Router } from "express";
import usersRouter from "./users.router.js";
import productsRouter from "./products.router.js";
import cartsRouter from "./carts.router.js";

const apiRouter = Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/products", productsRouter);
apiRouter.use("/carts", cartsRouter);

export default apiRouter;
