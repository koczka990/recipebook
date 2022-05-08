const Schema = require('mongoose').Schema;
const db = require('../config/db');
const RequiredIngredient = require('./requiredIngredient');

const Recipe = db.model('Recipe', {
    name: String,
    difficulty: Number,
    time: String,
    kcal: Number,
    protein: Number,
    carbohydrate: Number,
    fat: Number,
    requiredIngredients: [{
        type: Schema.Types.ObjectId,
        ref: 'RequiredIngredient'
    }]
});

module.exports = Recipe;