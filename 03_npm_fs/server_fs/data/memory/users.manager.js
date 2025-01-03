import crypto from "crypto";
import { faker } from "@faker-js/faker";

class UsersManager {
  #all = [];
  create = () => {
    try {
      const fullName = faker.person.fullName().toLowerCase().split(" ");
      const newUser = {
        _id: crypto.randomBytes(12).toString("hex"),
        name: fullName[0],
        lastName: fullName[1],
        email: fullName[0] + "_" + fullName[1] + "@coder.com.ar",
        password: "hola1234",
        age: faker.number.int({ min: 18, max: 99 }),
        avatar: faker.image.avatar(),
        role: faker.helpers.arrayElement(["admin", "user", "guest"]),
      };
      this.#all.push(newUser);
      return newUser;
    } catch (error) {
      throw error;
    }
  };
  readAll = () => {
    try {
      return this.#all;
    } catch (error) {
      throw error;
    }
  };
  readOne = (id) => {
    try {
      const user = this.#all.find((u) => u.id === id);
      return user;
    } catch (error) {
      throw error;
    }
  };
}

const usersManager = new UsersManager();
export default usersManager;
