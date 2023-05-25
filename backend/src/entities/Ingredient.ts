import { Food } from "./Food";

export class Ingredient {
  public readonly id: string;

  public name: string;
  public calories: number;
  public amount: number;
  public amountUnit: string;
  public food: Food;
}
