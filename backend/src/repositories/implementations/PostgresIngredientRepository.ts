import { IIngredientRepository } from "../IIngredientRepository";
import { Ingredient } from "../../entities/Ingredient";
import { Food } from "../../entities/Food";
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

  async findById(id: string): Promise<Ingredient> {
    const result = await db`
      SELECT *
      FROM ingredient
      WHERE id = ${id};
    `;
    const { name, amount, amountUnit, calories, food_id } = result[0];

    const foodResult = db`SELECT * FROM food WHERE id = ${food_id}`;

    const food = new Food(
      foodResult[0].name,
      foodResult[0].calories,
      foodResult[0].weight,
      foodResult[0].unit,
      foodResult[0].calories_per_unit,
      foodResult[0].id,

    );
    return new Ingredient(name, amount, amountUnit, food, calories, id);
  }

  async findByName(name: string): Promise<Ingredient> {

  }
}
