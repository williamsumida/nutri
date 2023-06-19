import { Response } from "express";
import { Request } from "../../types";
import { GetIngredientUseCase } from "./GetIngredientUseCase";
import { z } from "zod";

export class GetIngredientController {
  constructor(private getIngredientUseCase: GetIngredientUseCase) { }

  async handle(request: Request, response: Response) {
    const getIngredientBodySchema = z.object({
      id: z.string().uuid()
    });

    const { id } = getIngredientBodySchema.parse(request.body);
    const ingredient = await this.getIngredientUseCase.execute({ id });
    return response.status(200).json({ ingredient });
  }
}
