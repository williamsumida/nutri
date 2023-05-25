import { Router, Response } from "express";
import { Request } from "../types";
import logger from "../logger";

import { createFoodController } from "../useCases/CreateFood";

const foodRoutes = Router();

foodRoutes.post("/food", async (request: Request, response: Response) => {
  return createFoodController.handle(request, response);
});

foodRoutes.get("/foods", async (request: Request, response: Response) => {
  const { query } = request;

  logger.info(query);

  response.status(200).json();
});

foodRoutes.get("/foods", async (request: Request, response: Response) => {
  const { body } = request;
  response.status(200).json();
});

export { foodRoutes };
