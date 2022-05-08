const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Recipe = db.model('Recipe', {
    name: String,
    difficulty: Number,
    time: Number,
    requiredIngredients: {
        quantity: Number,
        _usedIngredient: {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        }
    }
});

module.exports = Recipe;