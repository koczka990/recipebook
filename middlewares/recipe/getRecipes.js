/**
 * returns all existing recipe from the database in form of a list
 */

 const requireOption = require('../../requireOption');

 module.exports = function (objectrepository) {

    const RecipeModel = requireOption(objectrepository, 'RecipeModel');

    return function (req, res, next) {

        RecipeModel.find({}, (err, recipes) => {
            if(err){
                return next(err);
            }

            res.locals.recipes = recipes;
            return next();
        });
    };
};