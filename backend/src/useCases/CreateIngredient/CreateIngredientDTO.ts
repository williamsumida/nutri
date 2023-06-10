import { Food } from "../../entities/Food";

export interface ICreateIngredientDTO {
  food: Food;
  name: string;
  calories: number;
  amount: number;
  amountUnit: string;
}
