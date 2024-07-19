import express from 'express';
import { capturarRouter } from './src/routes/capturarDados.js';
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());

app.use(express.static('public'));


app.use(capturarRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}/`);
});
