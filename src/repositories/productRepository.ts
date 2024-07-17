import { Product } from "../entities/Product";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductRepository implements IProductRepository {
  private products: Product[] = [];

  async create(data: Product): Promise<Product> {
    this.products.push(data);
    return data;
  }

  async update(id: number, stock: number): Promise<Product> {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      return { ...this.products[index], stock };
    } else {
      throw new Error("Product not found");
    }
  }

  async find(limit: number, offset: number): Promise<Product[]> {
    const products = this.products.slice(offset, offset + limit);
    if (products) {
      return products;
    } else {
      throw new Error("No products found");
    }
  }
}
