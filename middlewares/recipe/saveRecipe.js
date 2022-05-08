/**
 * creates new recipe and saves it to database
 */

 const requireOption = require('../../requireOption');

 module.exports = function (objectrepository) {

    const RecipeModel = requireOption(objectrepository, 'RecipeModel');

    return function (req, res, next) {
        console.log(req.body);
        if((typeof req.body.recipeNameInput === 'undefined') ||
           (typeof req.body.difficultyInput === 'undefined') ||
           (typeof req.body.timeInput === 'undefined')) {
               console.log("itt a hunyo");
               return next();
           }
        console.log("bejutottunk savebe");
        if(typeof res.locals.recipe === 'undefined'){
            console.log("uj recipe jott letre");
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
            console.log("redirect jonne");
            return res.redirect('/');
        });
    };
};