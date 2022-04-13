const render = require('../middlewares/render');

const addIngredient = require('../middlewares/ingredient/addIngredient');
const delIngredient = require('../middlewares/ingredient/delIngredient');
const getIngredient = require('../middlewares/ingredient/getIngredient');
const getIngredients = require('../middlewares/ingredient/getIngredients');
const saveIngredient = require('../middlewares/ingredient/saveIngredient');
const getRecipeIngredients = require('../middlewares/ingredient/getRecipeIngredients')

const delRecipe = require('../middlewares/recipe/delRecipe');
const getRecipe = require('../middlewares/recipe/getRecipe');
const getRecipes = require('../middlewares/recipe/getRecipes');
const saveRecipe = require('../middlewares/recipe/saveRecipe');

module.exports = function (app) {
    const objRepo = {};

    

    app.use('/recept/new',
        saveRecipe(objRepo),
        render(objRepo, 'newRecipe'));

    app.use('/recept/edit/:receptid',
        getRecipe(objRepo),
        saveRecipe(objRepo),
        render(objRepo, 'editRecipe'));

    app.use('/recept/del/:receptid',
        getRecipe(objRepo),
        delRecipe(objRepo),
        render(objRepo, 'index'));

    app.get('/ingredients',
        getIngredients(objRepo),
        render(objRepo, 'ingredients'));

    app.get('/ingredient/new',
        saveIngredient(objRepo),
        render(objRepo, 'newIngredient'));

    app.use('/ingredient/edit/:ingredientid',
        getIngredient(objRepo),
        saveIngredient(objRepo),
        render(objRepo, 'editIngredient'));

    app.use('/ingredient/del/:ingredientid',
        getIngredient(objRepo),
        delIngredient(objRepo),
        render(objRepo, 'ingredients'));

    app.get('/manual/:recipeid',
        getRecipe(objRepo),
        getRecipeIngredients(objRepo),
        render(objRepo, 'recipe'));

    app.get('/manual/:recipeid/addIngredient',
        getIngredient(objRepo),
        addIngredient(objRepo),
        render(objRepo, 'addIngredient'));

    app.use('/',
        getRecipes(objRepo),
        render(objRepo, 'index'));
};