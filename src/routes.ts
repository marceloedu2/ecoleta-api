import express from "express";
import knex from "./database/connection";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();

routes.get("/items", ItemsController.index);

routes.get("/points/:id", PointsController.show);
routes.get("/points", PointsController.index);
routes.post("/points", PointsController.create);

export default routes;
