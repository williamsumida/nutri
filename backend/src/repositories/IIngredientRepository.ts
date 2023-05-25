import { Ingredient } from "../entities/Ingredient";

export interface IIngredientRepository {
  findByName(name: string): Promise<Ingredient>;
  save(ingredient: Ingredient): Promise<void>;
}
