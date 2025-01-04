import http from "http";

const server = http.createServer();
const port = 8080;
const ready = () => console.log("server ready on port " + port);
server.listen(port, ready);
