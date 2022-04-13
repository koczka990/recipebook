/**
 * renders the page given to it with the render engine
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};