const { Sequelize } = require('sequelize');

// Inicializa a conexão apontando para um arquivo local SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './escola.sqlite' // Este arquivo é criado automaticamente
})

module.exports = sequelize;