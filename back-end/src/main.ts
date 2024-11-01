// src/app.ts

import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors"; // Importa o middleware CORS
import promptRouter from "./routers/aiRouter";

// Carrega o arquivo .env
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(cors()); // Permite todas as origens
app.use(express.json());

// Configura o router
app.use("/", promptRouter);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
