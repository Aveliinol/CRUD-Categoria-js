const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDB");

const Categoria = sequelize.define(
    "Categoria",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'O nome é obrigatório.'
                },
                len: {
                    args: [2, 100],
                    msg: 'O nome deve ter entre 2 e 100 caracteres.'
                }
            }
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 255],
                    msg: 'A descrição deve ter entre 2 e 255 caracteres.'
                }
            }
        }
    }
)

module.exports = Categoria