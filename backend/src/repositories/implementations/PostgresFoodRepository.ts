import { IFoodRepository } from "../IFoodRepository";
import { Food } from "../../entities/Food";

export class PostgresFoodRepository implements IFoodRepository {
  async save(food: Food): Promise<Food> {
    return food;
  }

  async findAll(): Promise<Food[]> {
    return [];
  }
}
