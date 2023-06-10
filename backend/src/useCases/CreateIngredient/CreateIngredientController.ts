import { Request } from "../../types";
import { Response } from "express";
import { CreateIngredientUseCase } from "./CreateIngredientUseCase";
import { GetFoodUseCase } from "../GetFood/GetFoodUseCase";

import logger from "../../logger";
import { z } from "zod";

export class CreateIngredientController {
  private createIngredientUseCase: CreateIngredientUseCase;
  private getFoodUseCase: GetFoodUseCase;

  constructor(createIngredientUseCase: CreateIngredientUseCase, getFoodUseCase: GetFoodUseCase) {
    this.createIngredientUseCase = createIngredientUseCase;
    this.getFoodUseCase = getFoodUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    logger.info({ message: "Creating ingredient", data: request.body });

    const getIngredientBodySchema = z.object({
      foodId: z.string().uuid(),
      name: z.string(),
      calories: z.number(),
      amount: z.number(),
      amountUnit: z.string()
    });

    const { foodId, name, calories, amount, amountUnit } = getIngredientBodySchema.parse(request.body);

    try {
      const food = await this.getFoodUseCase.execute({ id: foodId });

      if (!food) {
        const message = `Food with id ${foodId} does not exist`;
        logger.info({ message });
        return response.status(400).json({ message });
      }

      const ingredient = await this.createIngredientUseCase.execute({ food, name, calories, amount, amountUnit });
      return response.status(201).json({ ingredient });
    } catch (err) {
      logger.error(err);
    }
  }
}

