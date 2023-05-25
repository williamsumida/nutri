import { Router, Response } from "express";
import { Request } from "../types";
import logger from "../logger";

import { createFoodController, getFoodsController, getFoodController } from "../useCases/CreateFood";

const foodRoutes = Router();

foodRoutes.post("/food", async (request: Request, response: Response) => {
  return createFoodController.handle(request, response);
});

foodRoutes.get("/food", async (request: Request, response: Response) => {
  return getFoodController.handle(request, response);
});

foodRoutes.get("/foods", async (request: Request, response: Response) => {
  return getFoodsController.handle(request, response);
});

export { foodRoutes };
