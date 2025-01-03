import productsManager from "./data/fs/products.manager.js";
import usersManager from "./data/fs/users.manager.js";

export default async function router(req, res) {
  const { url } = req;
  const type = { "Content-Type": "application/json" };
  const message = "API IS READY";

  try {
    switch (url) {
      case '/': {
        const endpoints = {
          "GET '/'": "landing page",
          "GET '/api/products/new'": "create a new product",
          "GET '/api/products'": "return an array of products",
          "GET '/api/users/new'": "create a new user",
          "GET '/api/users'": "return an array of users",
        };
        const response = { message, endpoints };
        res.writeHead(200, type).end(JSON.stringify(response));
        break;
      }
      case '/api/products/new': {
        const response = { response: await productsManager.create() };
        res.writeHead(201, type).end(JSON.stringify(response));
        break;
      }
      case '/api/products': {
        const response = { response: await productsManager.readAll() };
        res.writeHead(200, type).end(JSON.stringify(response));
        break;
      }
      case '/api/users/new': {
        const response = { response: await usersManager.create() };
        res.writeHead(201, type).end(JSON.stringify(response));
        break;
      }
      case '/api/users': {
        const response = { response: await usersManager.readAll() };
        res.writeHead(200, type).end(JSON.stringify(response));
        break;
      }
      default: {
        const error = { error: "METHOD/PATH NOT FOUND!" };
        res.writeHead(404, type).end(JSON.stringify(error));
        break;
      }
    }
  } catch (error) {
    console.error(error);
    const response = { error: "Internal Server Error", details: error.message };
    res.writeHead(500, type).end(JSON.stringify(response));
  }
}
