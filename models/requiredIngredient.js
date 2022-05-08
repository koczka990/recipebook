const Schema = require('mongoose').Schema;
const db = require('../config/db');

const RequiredIngredient = db.model('RequiredIngredient', {
    quantity: Number,
    measurement: String,
    _ingredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }
});

module.exports = RequiredIngredient;