import { Router, Response } from "express";
import { Request } from "../types";
import logger from "../logger";

import { createFoodController } from "../useCases/CreateFood";
import { getFoodsController } from "../useCases/GetFoods";

const foodRoutes = Router();

foodRoutes.post("/food", async (request: Request, response: Response) => {
  return createFoodController.handle(request, response);
});

foodRoutes.get("/food", async (request: Request, response: Response) => {
  //return getFoodsController.handle(request, response);
});

foodRoutes.get("/foods", async (request: Request, response: Response) => {
  return getFoodsController.handle(request, response);
});

export { foodRoutes };
