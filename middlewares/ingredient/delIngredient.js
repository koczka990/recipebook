/**
 * deletes existing ingredient
 */

 const requireOption = require('../../requireOption');

 module.exports = function (objectrepository) {

    const IngredientModel = requireOption(objectrepository, 'IngredientModel');

    return function (req, res, next) {
        if(typeof res.locals.ingredient === 'undefined') {
            return next();
        }
        res.locals.ingredient.remove((err) => {
                if(err) {
                    return next(err);
                }
                return res.redirect('/ingredients');
            });
    };
};