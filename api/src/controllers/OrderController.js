const Order = require('../models/Order');

class OrderController {
  async store(req, res) {
    const { name, ingredients } = req.body;

    const order = await Order.create({ name, ingredients });

    return res.json(order);
  }

  async index(req, res) {
    const orders = await Order.find().populate('ingredients');

    return res.json(orders);
  }
};

module.exports = new OrderController();