import { Request } from "../../types";
import { Response } from "express";
import { CreateFoodUseCase } from "./CreateFoodUseCase";
import logger from "../../logger";

export class CreateFoodController {
  private createFoodUseCase: CreateFoodUseCase;

  constructor(createFoodUseCase: CreateFoodUseCase) {
    this.createFoodUseCase = createFoodUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, calories, caloriesPerUnit, weight, unit } = request.body;

    try {
      await this.createFoodUseCase.execute({ name, calories, caloriesPerUnit, weight, unit, });
      logger.info({ name, calories, caloriesPerUnit, weight, unit });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ message: err.message || "Unexpected error" });
    }
  }
}
