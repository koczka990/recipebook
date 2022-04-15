const Schema = require('mongoose').Schema;
const db = require('../config/db');

const RecipeIngredient = db.model('RecipeIngredient', {
    quantity: Number,
    _oneIngredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
      }
});

module.exports = RecipeIngredient;