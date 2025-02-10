import { socketServer } from "../../index.js";
import usersManager from "../data/fs/users.fs.js";

async function socketHelper(socket) {
  console.log("SOCKET ID: " + socket.id);

  const users = await usersManager.readAll();

  /* socket emite SOLO al socket id */
  socket.emit("users", users);

  socket.on("new user", async (data) => {
    await usersManager.create(data);
    const users = await usersManager.readAll();
    /* socketServer emite a TODOS los sockets */
    socketServer.emit("users", users);
  });
}

export default socketHelper;
