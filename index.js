const recipeModel = require('./models/recipe');
const ingredientModel = require('./models/ingredient');
const requiredIngredientModel = require('./models/requiredIngredient');

let oneIngredient = new ingredientModel();
oneIngredient.name = 'apple';
oneIngredient.measurement = 'kg';
oneIngredient.unit = 1;
oneIngredient.kcal = 200;
oneIngredient.protein = 10;
oneIngredient.carbohydrate = 4;
oneIngredient.fat = 1;
oneIngredient.save((err)=>{
  console.log(err);
});

let oneRequiredIngredient = new requiredIngredientModel();
oneRequiredIngredient.quantity = 0.1;
oneRequiredIngredient._ingredient = oneIngredient;
oneRequiredIngredient.save((err)=>{
  console.log(err);
});

let twoRequiredIngredient = new requiredIngredientModel();
twoRequiredIngredient.quantity = 0.5;
twoRequiredIngredient._ingredient = oneIngredient;
twoRequiredIngredient.save((err)=>{
  console.log(err);
});

let oneRecipe = new recipeModel();
oneRecipe.name = 'apple pie';
oneRecipe.difficulty = 3;
oneRecipe.time = '3h';
oneRecipe.requiredIngredients.push(oneRequiredIngredient);
oneRecipe.requiredIngredients.push(twoRequiredIngredient);
oneRecipe.save((err)=>{
  console.log(err);
});





// var express = require('express');
// var app = express();
// app.set('view engine', 'ejs');

// //app.use(express.static('static'));

// // Load routing
// require('./route/index')(app);

// app.listen(3000, function () {
//   console.log('Listening on :3000');
// });