const { DataTypes } = require('sequelize');
const sequelize = require('../banco/databse');

// Define o modelo "Aluno"
const Aluno = sequelize.define('Aluno', {
    // O campo 'id' o Sequelize cria automaticamente
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    curso: {
        type: DataTypes.STRING
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true // Correção de 'defaulValue' apontada na apostila
    }
});

module.exports = Aluno;