import { Product } from "../entities/Product";
import { IMailer } from "../interfaces/IMailer";
import { IMessageBroker } from "../interfaces/IMessageBroker";
import { IProductInteractor } from "../interfaces/IProductInteractor";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductInteractor implements IProductInteractor {
  private repository: IProductRepository;
  private mailer: IMailer;
  private broker: IMessageBroker;

  constructor(
    repository: IProductRepository,
    mailer: IMailer,
    broker: IMessageBroker,
  ) {
    this.repository = repository;
    this.mailer = mailer;
    this.broker = broker;
  }

  async createProduct(input: Product): Promise<Product> {
    const data = this.repository.create(input);
    // do some checks
    await this.broker.NotifyToPromotionService(data);

    return data;
  }

  async updateStock(id: number, stock: number): Promise<Product> {
    const data = await this.repository.update(id, stock);
    await this.mailer.sendEmail("someone@someone.com", data);

    return data;
  }

  async getProducts(limit: number, offset: number): Promise<Product[]> {
    return await this.repository.find(limit, offset);
  }
}
