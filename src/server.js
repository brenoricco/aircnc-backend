import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import routes from "./routes";

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-iz9t3.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//req.query = Acessar query params(para filtros)
//req.params = Acessar route params(para edição e delete)
//req.body = Acessar corpo da requisição(para criação, edição)
app.use(cors());
//app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads"))); //faz tipo um upload de arquivos estaticos
app.use(routes);

app.listen(3333);
