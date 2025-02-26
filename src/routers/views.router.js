import { Router } from "express";
import productsManagers from "../data/products.mongo.js";
import usersManagers from "../data/users.mongo.js";

const viewsRouter = Router();

viewsRouter.get("/", async (req, res) => {
  try {
    const products = await productsManagers.read();
    return res.status(200).render("index", { products, title: "HOME" });
  } catch (error) {
    console.log(error);
    return res.status(500).render("error");
  }
});
viewsRouter.get("/login", async (req, res) => {
  try {
    return res.status(200).render("login", { title: "LOGIN" });
  } catch (error) {
    console.log(error);
    return res.status(500).render("error");
  }
});
viewsRouter.get("/register", async (req, res) => {
  try {
    return res.status(200).render("register", { title: "REGISTER" });
  } catch (error) {
    console.log(error);
    return res.status(500).render("error");
  }
});
viewsRouter.get("/profile/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const profile = await usersManagers.readById(user_id);
    return res.status(200).render("profile", { title: "PROFILE", profile });
  } catch (error) {
    console.log(error);
    return res.status(500).render("error");
  }
});
viewsRouter.get("/products/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await productsManagers.readById(product_id);
    return res
      .status(200)
      .render("product", { title: product.title.toUpperCase(), product });
  } catch (error) {
    console.log(error);
    return res.status(500).render("error");
  }
});

export default viewsRouter;
