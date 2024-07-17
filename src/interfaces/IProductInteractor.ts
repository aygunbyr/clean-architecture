import { Product } from "../entities/Product";

export interface IProductInteractor {
  createProduct(input: Product): Promise<Product>;
  updateStock(id: number, stock: number): Promise<Product>;
  getProducts(limit: number, offset: number): Promise<Product[]>;
}
