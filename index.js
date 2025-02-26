import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import connectMongo from "./src/helpers/mongo.helper.js";
import __dirname from "./utils.js";
import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js"
import pathHandler from "./src/middlewares/pathHandler.mid.js"

/* server settings */
const server = express();
const port = process.env.PORT;
const ready = async () => {
  console.log("server ready on port " + port);
  await connectMongo(process.env.MONGO);
};
server.listen(port, ready);

/* engine settings */
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/src/views");

/* middlewares settings */
server.use(morgan("dev"));
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

/* routers settings */
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);
