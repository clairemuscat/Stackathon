const Sequelize = require('sequelize')
const db = require('../db')

const Emotion = db.define('emotion', {
  pictureId: {
    type: Sequelize.STRING
  },
  anger: {
    type: Sequelize.DECIMAL
  },
  disgust: {
    type: Sequelize.DECIMAL
  },
  fear: {
    type: Sequelize.DECIMAL
  },
  joy: {
    type: Sequelize.DECIMAL
  },
  sadness: {
    type: Sequelize.DECIMAL
  },
  surprise: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Emotion
