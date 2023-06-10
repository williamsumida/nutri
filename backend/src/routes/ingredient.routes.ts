import { Router, Response } from "express";
import { Request } from "../types";

import { createIngredientController } from "../useCases/CreateIngredient";
//import { getFoodsController } from "../useCases/GetFoods";
//import { getFoodController } from "../useCases/GetFood";

const ingredientRoutes = Router();

ingredientRoutes.post("/ingredient", async (request: Request, response: Response) => {
  return createIngredientController.handle(request, response);
});


export { ingredientRoutes };
