const { Router } = require("express");
const IngredientsController = require("./controllers/IngredientsController");
const OrderController = require("./controllers/OrderController");

const routes = Router();

routes.post("/ingredients", IngredientsController.store);
routes.get("/ingredients", IngredientsController.index);

routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);

module.exports = routes;