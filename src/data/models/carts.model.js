import { Schema, Types, model } from "mongoose";

const collection = "carts";
const schema = new Schema(
  {
    quantity: { type: Number, default: 1 },
    user_id: { type: Types.ObjectId, ref: "users", required: true },
    product_id: { type: Types.ObjectId, ref: "products", required: true },
    state: { type: String, default: "reserved", enum: ["reserved", "paid", "delivered"] },
  },
  { timestamps: true }
);

const Cart = model(collection, schema);
export default Cart;
