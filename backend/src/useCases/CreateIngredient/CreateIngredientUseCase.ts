import { Ingredient } from "../../entities/Ingredient";
import { IIngredientRepository } from "../../repositories/IIngredientRepository";
import { ICreateIngredientDTO } from "./CreateIngredientDTO";

export class CreateIngredientUseCase {
  constructor(private ingredientRepository: IIngredientRepository) {

  }

  async execute(data: ICreateIngredientDTO) {
    const { food, name, calories, amount, amountUnit } = data;

    const ingredient = new Ingredient(name, amount, amountUnit, food, calories);
    const savedIngredient = this.ingredientRepository.save(ingredient);
    return savedIngredient;
  }
}
