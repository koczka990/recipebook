/**
 * returns an existing recipe specified by :recipeid
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.recipe = {
            _id: 'id1',
            name: 'Apple Pie',
            difficulty: 2,
            time: '2h',
            kcal: 1200,
            protein: 20,
            carbohydrate: 400,
            fat: 120
        }

        return next();
    };
};