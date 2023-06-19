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
      SELECT 
        i.id AS ingredientId,
        i.name AS ingredientName,
        i.amount AS ingredientAmount,
        i.amountUnit AS ingredientAmountUnit,
        i.calories AS ingredientCalories,
        f.id AS foodId, 
        f.name AS foodName, 
        f.calories AS foodCalories, 
        f.calories_per_unit AS foodCaloriesPerUnit,
        f.weight AS foodWeight,
        f.unit AS foodUnit
      FROM ingredient AS i
      INNER JOIN food AS f
        ON i.food_id = f.id
      WHERE i.id = ${id};
    `;

    const {
      ingredientId,
      ingredientName,
      ingredientAmount,
      ingredientAmountUnit,
      ingredientCalories,
      foodId,
      foodName,
      foodCalories,
      foodCaloriesPerUnit,
      foodWeight,
      foodUnit
    } = result[0];

    const food = new Food(foodName, foodCalories, foodWeight, foodUnit, foodCaloriesPerUnit, foodId);
    return new Ingredient(ingredientName, ingredientAmount, ingredientAmountUnit, food, ingredientCalories, ingredientId);
  }

  async findByName(name: string): Promise<Ingredient> {

  }
}
