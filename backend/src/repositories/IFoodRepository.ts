import { Food } from "../entities/Food";

export interface IFoodRepository {
  save(food: Food): Promise<Food>;
  findAll(): Promise<Food[]>;
}
