/**
 * deletes existing ingredient
 */

 const requireOption = require('../../requireOption');

 module.exports = function (objectrepository) {

    const RequiredIngredientModel = requireOption(objectrepository, 'RequiredIngredientModel');

    return function (req, res, next) {
        //console.log('itt hehehehe');
        if(typeof res.locals.recipeIngredient === 'undefined') {
            return next();
        }
        console.log(res.locals);
        const quantity = res.locals.recipeIngredient.quantity / res.locals.ingredient.unit;
        res.locals.recipe.kcal -= quantity * res.locals.ingredient.kcal;
        res.locals.recipe.protein -= quantity * res.locals.ingredient.protein;
        res.locals.recipe.carbohydrate -= quantity * res.locals.ingredient.carbohydrate;
        res.locals.recipe.fat -= quantity * res.locals.ingredient.fat;
        res.locals.recipe.save((err) => {
            if(err){
                return next();
            }
            res.locals.recipeIngredient.remove(function(err, removed) {
                if(err || removed == 0) {
                    return next(err);
                }
                return res.redirect('/manual/' + req.params.recipeid);
            });
        });

        
    };
};