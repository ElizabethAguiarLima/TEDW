const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const User = db.define('User', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  modelo: {
    type: DataTypes.STRING,
    required: true
  }, 
  motor: {
    type: DataTypes.STRING,
    required: true
  },
  ano: {
    type: DataTypes.STRING,
    required: true
  },
  fabricante: {
    type: DataTypes.STRING,
    required: true
  },
  valor: {
    type: DataTypes.STRING,
    required: true
  },
  cor: {
    type: DataTypes.STRING,
    required: true
  },
  opcionais: {
    type: DataTypes.STRING,
    required: true
  },
})

module.exports = User