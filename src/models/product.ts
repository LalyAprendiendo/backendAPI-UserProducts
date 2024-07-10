import { getData } from "../database";
import { Messages } from "../utils/messages";

class ProductModel {
  async getAll() {
    const { products } = await getData("products");
    return products;
  }

  async getById(id: number | string) {
    const products = await this.getAll();
    const searchedProduct = products.find((product) => product.id == id);
    if (!searchedProduct) {
      return Messages.NOT_FOUND;
    }
    return searchedProduct;
  }
  async getByDescription(description: string) {
    const products = await this.getAll();
    const searchedDescription = products.filter((product) =>
      product.description.includes(description)
    );
    if (!searchedDescription.length) {
      // !searchedDescription[0] otra forma.
      return Messages.NOT_FOUND;
    }
    return searchedDescription;
  }
}

const products = new ProductModel();
//const products2 = new Product()

const { getAll, getById, getByDescription } = products;
export { getAll, getById, getByDescription };
