import { Router } from "express";
import { addDados, getDados } from "../controllers/capturar.controllers.js";


export const capturarRouter = Router()


capturarRouter.get("/dados", getDados);
capturarRouter.post("/postardados", addDados);
