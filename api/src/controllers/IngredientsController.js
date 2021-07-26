const Ingredient = require('../models/Ingredient');

class IngredientsController {
  async store(req, res) {
    const { name } = req.body;

    const ingredient = await Ingredient.create({ name });

    return res.json(ingredient);
  }

  async index(req, res) {
    const ingredients = await Ingredient.find();

    return res.json(ingredients);
  }
};

module.exports = new IngredientsController();