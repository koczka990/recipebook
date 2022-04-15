const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Recipe = db.model('Recipe', {
    name: String,
    difficulty: Number,
    time: Number
});

module.exports = Recipe;