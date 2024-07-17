import { IMailer } from "../interfaces/IMailer";

export class Mailer implements IMailer {
  sendEmail(to: string, product: unknown) {
    // send grid implementation
    console.log("sending email");
    return true;
  }
}
