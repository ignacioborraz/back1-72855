import cartsManager from "../data/carts.mongo.js";

const addProductToCart = async (req, res, next) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    const one = await cartsManager.addProductToCart(user_id, product_id, quantity);
    return res.status(201).json({
      method: req.method,
      url: req.url,
      response: one,
    });
  } catch (error) {
    next(error);
  }
};
const readProductsByUser = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const all = await cartsManager.readProductsByUser(uid);
    if (all.length > 0) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: all,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};
const updateQuantity = async (req, res, next) => {
  try {
    const { cid } = req.params;
    const quantity = req.body;
    const one = await cartsManager.updateQuantity(cid, quantity);
    if (one) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: one,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};
const removeProductFromCart = async (req, res, next) => {
  try {
    const { cid } = req.params;
    const one = await cartsManager.removeProductFromCart(cid);
    if (one) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: one,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

export {
  addProductToCart,
  readProductsByUser,
  updateQuantity,
  removeProductFromCart,
};
