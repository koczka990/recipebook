/**
 * creates a new ingredient and saves it to database
 */

 const requireOption = require('../../requireOption');

 module.exports = function (objectrepository) {

    const IngredientModel = requireOption(objectrepository, 'IngredientModel');

    return function (req, res, next) {
        if((typeof req.body.name === 'undefined') ||
           (typeof req.body.measurement === 'undefined') ||
           (typeof req.body.unit === 'undefined') ||
           (typeof req.body.kcal === 'undefined') ||
           (typeof req.body.protein === 'undefined') ||
           (typeof req.body.carbohydrate === 'undefined') ||
           (typeof req.body.fat === 'undefined')) {
               return next();
           }
        if(typeof res.locals.ingredient === 'undefined'){
            res.locals.ingredient = new IngredientModel(); 
        }

        res.locals.ingredient.name = req.body.name;
        res.locals.ingredient.measurement = req.body.measurement;
        res.locals.ingredient.unit = req.body.unit;
        res.locals.ingredient.kcal = req.body.kcal;
        res.locals.ingredient.protein = req.body.protein;
        res.locals.ingredient.carbohydrate = req.body.carbohydrate;
        res.locals.ingredient.fat = req.body.fat;
        

        res.locals.ingredient.save((err) => {
            if(err){
                return next(err);
            }
            return res.redirect('/ingredients');
        });
    };
};