const express = require('express');
const dotenv = require('dotenv');
const app = express();
const { sequelize } = require('./src/config/configDB.js');
const categoriaRoute = require("./src/modules/categoria/router/categoria.route.js");

dotenv.config();

app.use(express.json());

app.use('/categoria/', categoriaRoute);

const PORTA = process.env.PORTA;

app.listen(PORTA, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync({ force: false, alter: true });
        console.log('Banco de dados sincronizado com sucesso.');
    } catch (err) {
        console.error('Erro ao conectar ou sincronizar o banco de dados:', err);
    }
    console.log(`Servidor rodando na porta ${PORTA}`);
});