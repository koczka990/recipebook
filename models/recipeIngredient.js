const Schema = require('mongoose').Schema;
const db = require('../config/db');

const RecipeIngredient = db.model('RecipeIngredient', {
    quantity: Number,
    _usedIngredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    },
    _containingRecipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }
});

module.exports = RecipeIngredient;