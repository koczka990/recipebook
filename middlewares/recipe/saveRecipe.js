/**
 * creates new recipe and saves it to database
 */

 const requireOption = require('../../requireOption');

 module.exports = function (objectrepository) {

    const RecipeModel = requireOption(objectrepository, 'RecipeModel');

    return function (req, res, next) {
        if((typeof req.body.recipeNameInput === 'undefined') ||
           (typeof req.body.difficultyInput === 'undefined') ||
           (typeof req.body.timeInput === 'undefined')) {
               return next();
           }
        if(typeof res.locals.recipe === 'undefined'){
            res.locals.recipe = new RecipeModel();
            res.locals.recipe.kcal = 0;
            res.locals.recipe.protein = 0;
            res.locals.recipe.carbohydrate = 0;
            res.locals.recipe.fat = 0;
        }

        res.locals.recipe.name = req.body.recipeNameInput;
        res.locals.recipe.difficulty = req.body.difficultyInput;
        res.locals.recipe.time = req.body.timeInput;
        

        res.locals.recipe.save((err) => {
            if(err){
                return next(err);
            }
            return res.redirect('/');
        });
    };
};