import "reflect-metadata";
import express from "express";
import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";

const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.json());

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Listening to: ", PORT);
});
