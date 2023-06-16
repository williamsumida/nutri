import { IIngredientRepository } from "../../repositories/IIngredientRepository";
import { IGetIngredientDTO } from "./GetIngredientDTO";
import logger from "../../logger";

export class GetIngredientUseCase {
  constructor(private ingredientRepository: IIngredientRepository) { }

  async execute(data: IGetIngredientDTO) {
    const { id } = data;
    logger.info({ message: "Fetching ingredient", foodId: id });
    const ingredient = await this.ingredientRepository.findById(id);
    logger.info({ message: "Ingredient", ingredient });
    return ingredient;
  }
}
