import { Response } from "express";
import { Request } from "../../types";
import { GetFoodUseCase } from "./GetFoodUseCase";
import logger from "../../logger";
import { z } from "zod";


export class GetFoodController {
  constructor(private getFoodUseCase: GetFoodUseCase) { }

  async handle(request: Request, response: Response) {
    logger.info({ msg: "fetching food" });
    try {
      const getFoodParamsSchema = z.object({
        id: z.string().uuid()
      });

      const { id } = getFoodParamsSchema.parse(request.params);
      const food = await this.getFoodUseCase.execute({ id });
      return response.status(200).json({ food });
    } catch (err) {
      return response.status(400).json({ message: err.message || "Unexpected error" });
    }

  }
}
