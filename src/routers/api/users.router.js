import { Router } from "express";
import {
    create,
    read,
    readById,
    updateById,
    destroyById,
  } from "../../controllers/users.controller.js";
  
  const usersRouter = Router();
  
  usersRouter.post("/", create);
  usersRouter.get("/", read);
  usersRouter.get("/:uid", readById);
  usersRouter.put("/:uid", updateById);
  usersRouter.delete("/:uid", destroyById);

export default usersRouter;
