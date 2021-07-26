const { Schema, model } = require('mongoose');

const IngredientSchema = new Schema({
  name: String,
});

module.exports = model('Ingredient', IngredientSchema);