import { Ingredient } from "../entities/Ingredient";

export interface IIngredientRepository {
  save(ingredient: Ingredient): Promise<Ingredient>;
  findByName(name: string): Promise<Ingredient>;
}
