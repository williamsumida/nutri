import { Router } from "express";
import { mealRoutes } from "./meal.routes";
import { foodRoutes } from "./food.routes";

const routes = Router();

routes.use(mealRoutes);
routes.use(foodRoutes);

export { routes };
