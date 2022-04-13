/**
 * renders the page given to it with the render engine
 */

 module.exports = function (objectrepository, viewName) {
    return function (req, res, next) {
        res.render(viewName);
    };
};