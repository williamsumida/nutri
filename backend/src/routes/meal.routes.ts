import { Router, Response } from "express";
import { Request } from "../types";

const mealRoutes = Router();

mealRoutes.post("/create", async (request: Request, response: Response) => {
  const { body } = request;
  response.status(200).json();
});

export { mealRoutes };
