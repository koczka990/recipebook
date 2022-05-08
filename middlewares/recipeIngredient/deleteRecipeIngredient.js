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
        res.locals.recipeIngredient.remove(function(err, removed) {
                if(err || removed == 0) {
                    return next(err);
                }
                return res.redirect('/manual/' + req.params.recipeid);
            });
    };
};