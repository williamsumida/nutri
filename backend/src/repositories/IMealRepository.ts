import { Meal } from "../entities/Meal";

export interface IMealRepository {
  create(): Promise<void>;
  get(): Promise<Meal>;
  save(meal: Meal): Promise<void>;
}
