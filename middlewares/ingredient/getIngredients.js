/**
 * returns list of all existing ingredients
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.ingredients = [
            {
                _id: 'id1',
                name: 'Apple',
                measurement: 'kg',
                unit: 1,
                kcal: 520,
                protein: 3,
                carbohydrate: 114,
                fat: 2
            },
            {
                _id: 'id2',
                name: 'Flour',
                measurement: 'g',
                unit: 100,
                kcal: 337,
                protein: 9.8,
                carbohydrate: 71,
                fat: 1
            },
            {
                _id: 'id3',
                name: 'Cukor',
                measurement: 'g',
                unit: 100,
                kcal: 387,
                protein: 0,
                carbohydrate: 100,
                fat: 0
            }
        ]

        return next();
    };
};