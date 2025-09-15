const CategoriaModel = require('../model/categoria.model');

class CategoriaController {
    
static async criarCategoria (req, res) {
        try {
            const novaCategoria = await CategoriaModel.create(req.body);
            res.status(201).json(novaCategoria);
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!", erro: error.message})
        }
    };

static async atualizarCategoria(req, res) {
        try {
            const categoria = await CategoriaModel.findByPk(req.params.id);
            if (!categoria) {
                return res.status(404).json({ error: 'Categoria não encontrada.' });
            }
            await categoria.update(req.body);
            res.json(categoria);
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!", erro: error.message})
        }
    };


static async listarCategorias(req, res) {
        try {
            const categorias = await CategoriaModel.findAll();
            res.json(categorias);
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!", erro: error.message})
        }
    };


static async buscarCategoriaPorId(req, res) {
        try {
            const categoria = await CategoriaModel.findByPk(req.params.id);
            if (!categoria) {
                return res.status(404).json({ error: 'Categoria não encontrada.' });
            }
            res.json(categoria);
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!", erro: error.message})
        }
    };

static async deletarCategoria(req, res) {
        try {
            const categoria = await CategoriaModel.findByPk(req.params.id);
            if (!categoria) {
                return res.status(404).json({ error: 'Categoria não encontrada.' });
            }
            await categoria.destroy();
            res.status(200).json({ msg: 'Categoria deletada com sucesso.' });
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!", erro: error.message})
        }
    };
}

module.exports = CategoriaController