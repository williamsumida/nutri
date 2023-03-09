import { Meal } from "../entities/Meal";

export interface IMealInterface {
  create(): Promise<void>;
  get(): Promise<Meal>;
  save(): Promise<void>;
}
