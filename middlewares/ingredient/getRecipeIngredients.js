/**
 * returns all ingredients included by specified recipe
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.recipeIngredients = [
            {
                _id: 'id1',
                name: 'Apple',
                quantity: 0.5,
                unit: 'kg',
            },
            {
                _id: 'id2',
                name: 'Flour',
                quantity: 100,
                unit: 'g',
            }
        ];

        return next();
    };
};