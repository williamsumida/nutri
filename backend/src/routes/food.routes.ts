import { Router, Response } from "express";
import { Request } from "../types";

import { createFoodController } from "../useCases/CreateFood";
import { getFoodsController } from "../useCases/GetFoods";
import { getFoodController } from "../useCases/GetFood";

const foodRoutes = Router();

foodRoutes.post("/food", async (request: Request, response: Response) => {
  return createFoodController.handle(request, response);
});

foodRoutes.get("/food/:id", async (request: Request, response: Response) => {
  return getFoodController.handle(request, response);
});

foodRoutes.get("/foods", async (request: Request, response: Response) => {
  return getFoodsController.handle(request, response);
});

export { foodRoutes };
