import fs from "fs/promises";
import { faker } from "@faker-js/faker";

const FILE_PATH = "./data/fs/files/users.json";

class UsersManager {
  constructor(path) {
    this.path = path;
    this.initializeFile(path);
  }

  async initializeFile(path) {
    try {
      await fs.access(path);
    } catch (error) {
      await fs.writeFile(path, JSON.stringify([]));
    }
  }

  async readFile() {
    try {
      const data = await fs.readFile(this.path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      throw error;
    }
  }

  async writeFile(data) {
    try {
      await fs.writeFile(this.path, JSON.stringify(data, null, 2));
    } catch (error) {
      throw error;
    }
  }

  async create() {
    try {
      const _id = faker.database.mongodbObjectId();
      const name = faker.person.firstName().toLowerCase();
      const age = faker.number.int({ min: 18, max: 100 });
      const email = name + age + "@coder.com.ar";
      const password = "hola1234";
      const avatar = faker.image.avatar();
      const role = faker.helpers.arrayElement(["admin", "user", "guest"]);
      const newUser = { _id, name, email, password, age, avatar, role };
      const readResult = await this.readFile();
      readResult.push(newUser);
      await this.writeFile(readResult);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async readAll() {
    try {
      return await this.readFile();
    } catch (error) {
      throw error;
    }
  }

  async readOne(id) {
    try {
      const readResult = await this.readFile();
      const one = readResult.find((u) => u._id === id);
      return one;
    } catch (error) {
      throw error;
    }
  }
}

const usersManager = new UsersManager(FILE_PATH);
export default usersManager;
