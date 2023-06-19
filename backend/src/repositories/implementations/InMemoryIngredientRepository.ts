import { IIngredientRepository } from "../IIngredientRepository";
import { Ingredient } from "../../entities/Ingredient";
import logger from "../../logger";

const ingredients: Ingredient[] = [];

export class InMemoryIngredientRepository implements IIngredientRepository {
  async save(ingredient: Ingredient): Promise<Ingredient> {
    ingredients.push(ingredient);
    logger.info("Ingredient inserted");
    return ingredient;
  }

  async findById(id: string): Promise<Ingredient> {
    return ingredients.find(ingredient => ingredient.id === id);
  }

  async findByName(name: string): Promise<Ingredient> {
    return ingredients.find(ingredient => ingredient.name === name);
  }
}
