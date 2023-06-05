import { Food } from "./Food";
import { v4 } from "uuid";
import { convertToGrams, convertToMililiters } from "../util/conversions";

enum AmountValidationAction {
  None,
  ConvertToGrams,
  ConvertToMililiters,
  Invalid
}

export class Ingredient {
  public readonly id: string;

  public name: string;
  public calories: number;
  public amount: number;
  public amountUnit: string;
  public food: Food;

  constructor(
    name: string, amount: number, amountUnit: string, food: Food, calories?: number, id?: string
  ) {
    this.name = name;
    this.amount = amount;
    this.amountUnit = amountUnit;
    this.food = food;
    this.calories = calories;
    this.id = id;

    const amountUnitAction = this.validateAmountUnit(this.amountUnit);

    // Refatorar
    if (amountUnitAction === AmountValidationAction.ConvertToGrams) {
      this.amount = convertToGrams(this.amount, this.amountUnit);
      this.amountUnit = "g";
    }

    if (amountUnitAction === AmountValidationAction.ConvertToMililiters) {
      this.amount = convertToMililiters(this.amount, this.amountUnit);
      this.amountUnit = "ml";
    }

    if (!calories) {
      this.calories = this.calculateCalories(this.amount, this.food);
    }

    if (!id) {
      this.id = v4();
    }
  }

  calculateCalories(amount: number, food: Food): number {
    return amount * food.caloriesPerUnit;
  }

  validateAmountUnit(amountUnit: string): AmountValidationAction {
    switch (amountUnit) {
      case "g" || "ml":
        return AmountValidationAction.None;

      case "kg":
        return AmountValidationAction.ConvertToGrams;

      case "l":
        return AmountValidationAction.ConvertToMililiters;

      default:
        return AmountValidationAction.Invalid;
    }
  }

}
