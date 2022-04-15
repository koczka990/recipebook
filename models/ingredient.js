const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Ingredient = db.model('Ingredient', {
    name: String,
    measurement: String,
    unit: Number,
    kcal: Number,
    protein: Number,
    carbohydrate: Number,
    fat: Number
});

module.exports = Ingredient;