import { Container } from 'inversify';

import { ProductInteractor } from './interactors/ProductInteractor';
import { ProductRepository } from './repositories/productRepository';
import { Mailer } from './external-libraries/mailer';
import { MessageBroker } from './external-libraries/messageBroker';
import { IProductRepository } from './interfaces/IProductRepository';
import { INTERFACE_TYPE } from './utils';
import { IProductInteractor } from './interfaces/IProductInteractor';
import { IMessageBroker } from './interfaces/IMessageBroker';
import { IMailer } from './interfaces/IMailer';
import { ProductController } from './controllers/ProductController';

const container = new Container();

container
  .bind<IProductRepository>(INTERFACE_TYPE.ProductRepository)
  .to(ProductRepository);

container
  .bind<IProductInteractor>(INTERFACE_TYPE.ProductInteractor)
  .to(ProductInteractor);

container.bind<IMailer>(INTERFACE_TYPE.Mailer).to(Mailer);

container.bind<IMessageBroker>(INTERFACE_TYPE.MessageBroker).to(MessageBroker);

container.bind(INTERFACE_TYPE.ProductController).to(ProductController);

export default container;
