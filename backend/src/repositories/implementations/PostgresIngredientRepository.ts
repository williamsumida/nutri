import { IIngredientRepository } from "../IIngredientRepository";
import { Ingredient } from "../../entities/Ingredient";
import logger from "../../logger";

import { db } from "../../database/postgres";

export class PostgresIngredientRepository implements IIngredientRepository {
  async save(ingredient: Ingredient): Promise<Ingredient> {
    const result = await db`
      INSERT INTO ingredient(id, name, amount, amountUnit, foodId)
      VALUES(${ingredient.id}, ${ingredient.name}, ${ingredient.amount}, ${ingredient.amountUnit}, ${ingredient.food.id})
      RETURNNING *;
   `;

    const { id, name, amount, amountUnit, calories } = result[0];
    return new Ingredient(name, amount, amountUnit, ingredient.food, calories, id);
  }

  async findByName(name: string): Promise<Ingredient> {

  }
}
