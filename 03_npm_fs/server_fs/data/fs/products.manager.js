import fs from "fs/promises";
import { faker } from "@faker-js/faker";

const FILE_PATH = "./data/fs/files/products.json";

class ProductsManager {
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
      const title = faker.commerce.productName();
      const price = faker.commerce.price({ min: 10, max: 500, dec: 2 });
      const stock = faker.number.int({ min: 0, max: 1000 });
      const photo = faker.image.url();
      const category = faker.helpers.arrayElement([
        "ninguna",
        "celulares",
        "computadoras",
        "accesorios",
      ]);
      const newProduct = { _id, title, price, stock, photo, category };
      const readResult = await this.readFile();
      readResult.push(newProduct);
      await this.writeFile(readResult);
      return newProduct;
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
      const one = readResult.data.find((p) => p._id === id);
      return one;
    } catch (error) {
      throw error;
    }
  }
}

const productsManager = new ProductsManager(FILE_PATH);
export default productsManager;
