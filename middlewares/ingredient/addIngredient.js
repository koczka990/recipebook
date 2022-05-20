/**
 * adds new ingredient to existning recipe
 */

 const { redirect } = require('express/lib/response');
const { Mongoose } = require('../../config/db');
const requireOption = require('../../requireOption');

module.exports = function (objectrepository) {

    const RequiredIngredientModel = requireOption(objectrepository, 'RequiredIngredientModel');
    const IngredientModel = requireOption(objectrepository, 'IngredientModel');

    return function (req, res, next) {
        if(typeof req.body.quantity === 'undefined'){
            return next();
        }
        const quantity = req.body.quantity;
        res.locals.requiredIngredient = new RequiredIngredientModel();
        res.locals.requiredIngredient.quantity = quantity * res.locals.ingredient.unit;
        res.locals.requiredIngredient.name = res.locals.ingredient.name;
        res.locals.requiredIngredient.measurement = res.locals.ingredient.measurement;
        res.locals.requiredIngredient._ingredient = res.locals.ingredient;
        res.locals.requiredIngredient.save((err) => {
            if(err) {
                next(err);
            }
        });
        res.locals.recipe.kcal += res.locals.ingredient.kcal * quantity;
        res.locals.recipe.protein += res.locals.ingredient.protein * quantity;
        res.locals.recipe.carbohydrate += res.locals.ingredient.carbohydrate * quantity;
        res.locals.recipe.fat += res.locals.ingredient.fat * quantity;
        res.locals.recipe.requiredIngredients.push(res.locals.requiredIngredient);
        res.locals.recipe.save((err) => {
            if(err) {
                next(err);
            }
            return res.redirect('/manual/' + req.params.recipeid);
        });
        
    };
};