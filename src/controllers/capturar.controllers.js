import { dados } from "../data/capturar.database.js";
import { Capturar } from "../models/capturar.model.js";

// Função para obter dados
export const getDados = (req, res) => {
        res.status(200).json(dados);
}

// Função para adicionar dados
export const addDados = (req, res) => {
    
        const { email, senha } = req.body;

        const dataFormatted = new Capturar(email, senha)
        dados.push(dataFormatted)

        res.status(201).json({ message: 'Dados adicionados com sucesso!', dados: dataFormatted })

};
