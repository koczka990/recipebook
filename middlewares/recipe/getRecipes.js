/**
 * returns all existing recipe from the database in form of a list
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.recipes = [
            {
                _id: 'id1',
                name: 'Apple Pie',
                difficulty: 2,
                time: '2h',
                kcal: 1200,
                protein: 20,
                carbohydrate: 400,
                fat: 120
            },
            {
                _id: 'id2',
                name: 'vajas kenyer',
                difficulty: 0,
                time: '12m',
                kcal: 100,
                protein: 2,
                carbohydrate: 50,
                fat: 10
            }
        ]

        next();
    };
};