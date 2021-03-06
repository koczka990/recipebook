/**
 * returns all ingredients included by specified recipe
 */

 const requireOption = require('../../requireOption');

 module.exports = function (objectrepository) {

    const RequiredIngredientModel = requireOption(objectrepository, 'RequiredIngredientModel');

    return function (req, res, next) {

        RequiredIngredientModel.find({'_id': {$in: res.locals.recipe.requiredIngredients}}, (err, requiredIngredients) => {
            if(err){
                return next(err);
            }
            res.locals.recipeIngredients = requiredIngredients;
            return next();
        });
    };
};