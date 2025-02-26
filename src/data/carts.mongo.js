import { Types } from "mongoose";
import Manager from "./manager.mongo.js";
import Cart from "./models/carts.model.js";

class CartsManager extends Manager {
  constructor() {
    super(Cart);
  }
  addProductToCart = async (product_id, user_id, quantity) => {
    try {
      const one = await this.create({ product_id, user_id, quantity });
      return one;
    } catch (error) {
      throw error;
    }
  };
  readProductsFromUser = async (user_id) => {
    try {
      const all = await this.read({ user_id, state: "reserved" });
      return all;
    } catch (error) {
      throw error;
    }
  };
  updateQuantity = async (cart_id, quantity) => {
    try {
      const one = await this.updateById(cart_id, { quantity });
      return one;
    } catch (error) {
      throw error;
    }
  };
  updateState = async (cart_id, state) => {
    try {
      const one = await this.updateById(cart_id, { state });
      return one;
    } catch (error) {
      throw error;
    }
  };
  removeProductFromCart = async (cart_id) => {
    try {
      const one = await this.destroyById(cart_id);
      return one;
    } catch (error) {
      throw error;
    }
  };
  totalToPay = async (user_id) => {
    try {
      /* cada paso de la secuencia es un objeto con los operadores correspondientes */
      const pipeline = [
        /* filtrar los carritos del usuario específico */
        /* mongo no detecta el id como un objectid, entonces necesito transformarlo */
        { $match: { user_id: new Types.ObjectId(user_id) } },
        /* unir los datos de la coleccion de productos */
        { $lookup: { from: "products", localField: "product_id", foreignField: "_id", as: "product" } },
        /* descomponer array "product" con los datos relacionados */
        { $unwind: "$product" },
        /* unir los datos de la coleccion de usuarios */
        { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user" } },
        /* descomponer array "user" con los datos relacionados */
        { $unwind: "$user" },
        /* calcular los subtotales (product.price * quantity) */
        { $addFields: {
          subtotal: { $multiply: ["$product.price","$quantity"]}
        }},
        /* reducir por usuario y calcular el total a pagar */
        { $group: {
          _id: "$user_id",
          email: { $first: "$user.email" },
          products: {
            $push: {
              title: "$product.title",
              price: "$product.price",
              quantity: "$quantity",
              subtotal: "$subtotal"
            }
          },
          total: { $sum: "$subtotal"}
        }},
        /* limpiar el objeto y acomodar las propiedades */
        { $project: { _id: 0 }}
      ];
      const total = await this.model.aggregate(pipeline);
      return total;
    } catch (error) {
      throw error;
    }
  };
}

const cartsManager = new CartsManager();
export default cartsManager;
