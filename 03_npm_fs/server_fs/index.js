import http from "http";
import router from "./router.js";

const server = http.createServer(router);
const PORT = 8081;
const ready = () => console.log("server ready on port " + PORT);
server.listen(PORT, ready);