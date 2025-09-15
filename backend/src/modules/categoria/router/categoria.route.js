const express = require('express');
const CategoriaController = require('../controller/categoria.controller');

const router = express.Router();

router.post('/', CategoriaController.criarCategoria);

router.put('/:id', CategoriaController.atualizarCategoria);

router.get('/', CategoriaController.listarCategorias);

router.get('/:id', CategoriaController.buscarCategoriaPorId);

router.delete('/:id', CategoriaController.deletarCategoria);

module.exports = router;