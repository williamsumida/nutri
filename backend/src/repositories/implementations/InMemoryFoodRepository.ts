import { IFoodRepository } from "../IFoodRepository";
import { Food } from "../../entities/Food";
import logger from "../../logger";

const foods: Food[] = [];

export class InMemoryFoodRepository implements IFoodRepository {
  async save(food: Food): Promise<Food> {
    foods.push(food);
    logger.info("Food inserted");
    return food;
  }

  async findAll(): Promise<Food[]> {
    logger.info(foods);
    return foods;
  }
}
