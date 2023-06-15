import { Food } from "./Food";
import { v4 } from "uuid";
import { convertToGrams, convertToMililiters } from "../util/conversions";
import { AppError } from "../errors/AppError";

enum AmountValidationAction {
  None,
  ConvertToGrams,
  ConvertToMililiters,
  Invalid
}

interface ConvertedAmount {
  convertedAmount: number;
  convertedAmountUnit: string;
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


    const { convertedAmount, convertedAmountUnit } = this.convertAmount(this.amount, this.amountUnit);
    this.amount = convertedAmount;
    this.amountUnit = convertedAmountUnit;

    if (!calories) {
      this.calories = this.calculateCalories(this.amount, this.food);
    }

    if (!id) {
      this.id = v4();
    }
  }

  convertAmount(amount: number, amountUnit: string): ConvertedAmount {
    let convertedAmount = 0;
    let convertedAmountUnit = "";

    switch (amountUnit) {
      case "g" || "ml":
        convertedAmount = amount;
        convertedAmountUnit = amountUnit;
        break;
      case "kg":
        convertedAmount = convertToGrams(amount, amountUnit);
        convertedAmountUnit = "g";
        break;
      case "l":
        convertedAmount = convertToMililiters(amount, amountUnit);
        convertedAmountUnit = "ml";
      default:
        throw new AppError("Invalid unit");
    }

    return { convertedAmount, convertedAmountUnit };
  }

  calculateCalories(amount: number, food: Food): number {
    return amount * food.caloriesPerUnit;
  }
}
