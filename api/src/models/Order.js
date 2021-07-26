const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  ingredients: [{ type : Schema.Types.ObjectId, ref: 'Ingredient' }],
  name: String,
});

module.exports = model('Order', OrderSchema);