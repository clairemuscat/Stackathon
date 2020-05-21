const Sequelize = require('sequelize')
const db = require('../db')

const EmotionScore = db.define('emotionScore', {
  negative: {
    type: Sequelize.DECIMAL
  },
  neutral: {
    type: Sequelize.DECIMAL
  },
  positive: {
    type: Sequelize.DECIMAL
  }
})

module.exports = EmotionScore
