/**
 * returns recipeingredient specified by id
 */

 const requireOption = require('../../requireOption');

 module.exports = function (objectrepository) {

    const RequiredIngredientModel = requireOption(objectrepository, 'RequiredIngredientModel');

    return function (req, res, next) {
        RequiredIngredientModel.findOne({'_id': req.params.recipeingredientid}, (err, requiredIngredient) => {
            if(err || !requiredIngredient){
                return next(err);
            }
            res.locals.recipeIngredient = requiredIngredient;
            return next();
        });
    };
};