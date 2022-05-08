/**
 * returns specific ingredient specified by :ingredientid
 */

 const requireOption = require('../../requireOption');

 module.exports = function (objectrepository) {

    const IngredientModel = requireOption(objectrepository, 'IngredientModel');

    return function (req, res, next) {
        IngredientModel.findOne({_id: req.params.ingredientid}, 
            (err, ingredient) => {
                if(err || !ingredient) {
                    return next(err);
                }
                res.locals.ingredient = ingredient;
                return next();
            });
    };
};