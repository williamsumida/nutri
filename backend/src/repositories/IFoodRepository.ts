import { Food } from "../entities/Food";

export interface IFoodRepository {
  save(food: Food): Promise<Food>;
  findById(id: string): Promise<Food>;
  findAll(): Promise<Food[]>;
}
