import { IFoodRepository } from "../IFoodRepository";
import { Food } from "../../entities/Food";
import logger from "../../logger";

import { db } from "../../database/postgres";

export class PostgresFoodRepository implements IFoodRepository {
  async save(food: Food): Promise<Food> {
    const result = await db`
      INSERT INTO food(id, name, calories, calories_per_unit, weight, unit)
      VALUES(${food.id}, ${food.name}, ${food.calories}, ${food.caloriesPerUnit}, ${food.weight}, ${food.unit})
      RETURNING *;
    `;

    const { id, name, calories, calories_per_unit, weight, unit } = result[0];
    return new Food(name, calories, weight, unit, calories_per_unit, id);
  }

  async findById(id: string): Promise<Food> {
    const result = await db`
      SELECT *
      FROM food
      WHERE id = ${id};
    `;

    logger.info(result);
    const { name, calories, calories_per_unit, weight, unit } = result[0];
    return new Food(name, calories, weight, unit, calories_per_unit, id);
  }

  async findAll(): Promise<Food[]> {
    const foodList = [];
    const result = await db`
      SELECT *
      FROM food;
    `;

    result.forEach(food => {
      const { name, calories, calories_per_unit, weight, unit, id } = food;
      foodList.push(new Food(name, calories, weight, unit, calories_per_unit, id));
    });
    return foodList;
  }
}
