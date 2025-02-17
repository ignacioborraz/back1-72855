import Manager from "./manager.mongo.js";
import User from "./models/users.model.js";

const usersManagers = new Manager(User);
export default usersManagers;
