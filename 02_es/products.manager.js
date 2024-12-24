class ProductsManager {
  #all = [];
  init = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        console.log("No se pudieron cargar los productos de la API");
      } else {
        this.#all = await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };
  create = (data) => {
    try {
      const {
        id,
        title,
        price,
        stock = 0,
        category = "none",
        photo = "default.jpg",
      } = data;
      if (!id || !title || !price) {
        console.log("Faltan campos obligatorios");
      } else {
        const validCategories = ["none", "men's clothing", "women's clothing", "jewelery", "electronics"];
        if (!validCategories.includes(category)) {
          console.log("Categoría no válida");
        } else {
          const newProduct = { id, category, title, price, stock, photo };
          this.#all.push(newProduct);
          return newProduct;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  readAll = () => {
    try {
      if (this.#all.length === 0) {
        console.log("No hay productos disponibles");
      } else {
        return this.#all;
      }
    } catch (error) {
      console.log(error);
    }
  };
  readOne = (id) => {
    try {
      const product = this.#all.find((p) => p.id === id);
      if (!product) {
        console.log("Producto no encontrado");
      } else {
        return product;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

(async () => {
  try {
    const manager = new ProductsManager();
    await manager.init();
    const one = {
      id: 50,
      title: "Slim Fit Shirt ",
      price: 20,
      description: "",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    };
    const response1 = manager.create(one)
    console.log(response1);
    const response2 = manager.create({})
    //console.log(response2);
    const products = manager.readAll();
    //console.log("Productos disponibles:", products);
    const product1 = manager.readOne(products[0].id);
    console.log("Producto encontrado:", product1);
    const product2 = manager.readOne(1000);
    //console.log(product2);
  } catch (error) {
    console.error(error);
  }
})();
