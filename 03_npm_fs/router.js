import productsManager from "./data/products.manager.js";
import usersManager from "./data/users.manager.js";

// la funcion de enrutamiento depende:
//del objeto de requerimientos req
//del objeto de respuesta a enviar al cliente res
function router(req, res) {
  const { url /* , method */ } = req;
  const type = { "Contet-Type": "application/json" };
  switch (url) {
    case "/":
      const endpoints = {
        "GET '/'": "landing page of e-commerce",
        "GET '/api/products'": "list of all products",
        "GET '/api/products/faker'": "create a faker product",
        "GET '/api/users'": "list of all users",
        "GET '/api/users/faker'": "create a faker user",
      };
      res.writeHead(200, type).end(JSON.stringify(endpoints));
      break;
    case "/api/products/faker":
      // toda la logica para poder crear un nuevo producto falso
      const product = productsManager.create();
      res.writeHead(201, type).end(JSON.stringify({ response: product }));
      break;
    case "/api/products":
      // toda la logica para poder leer todos los productos
      const products = productsManager.readAll();
      res.writeHead(200, type).end(JSON.stringify({ response: products }));
      break;
    case "/api/users/faker":
      // toda la logica para poder crear un nuevo usuario falso
      const user = usersManager.create();
      res.writeHead(201, type).end(JSON.stringify({ response: user }));
      break;
    case "/api/users":
      // toda la logica para poder leer todos los usuarios
      const users = usersManager.readAll();
      res.writeHead(200, type).end(JSON.stringify({ response: users }));
      break;
    default:
      res
        .writeHead(404, type)
        .end(JSON.stringify({ message: "Not found method/url" }));
      break;
  }
}

export default router;
