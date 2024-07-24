import { Router } from "express";
import { addDados, getDados } from "../controllers/capturar.controllers.js";


export const capturarRouter = Router()


capturarRouter.get("/getDados", getDados);
capturarRouter.post("/Dados", addDados);
