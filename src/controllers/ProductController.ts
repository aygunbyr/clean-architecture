import { NextFunction, Request, Response } from "express";
import { IProductInteractor } from "../interfaces/IProductInteractor";

export class ProductController {
  private interactor: IProductInteractor;

  constructor(interactor: IProductInteractor) {
    this.interactor = interactor;
  }

  async onCreateProduct(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { body } = request;
      // validate logic
      const data = await this.interactor.createProduct(body);

      return response.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  async onGetProducts(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const offset = parseInt(`${request.query.offset}`) || 0;
      const limit = parseInt(`${request.query.limit}`) || 10;
      const data = await this.interactor.getProducts(limit, offset);

      return response.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async onUpdateStock(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const {
        body: { stock },
        params: { id },
      } = request;
      const parsedId = parseInt(id);
      const data = await this.interactor.updateStock(parsedId, stock);

      return response.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
