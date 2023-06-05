import { describe, test, expect, beforeEach } from "vitest";
//import { InMemoryIngredientRepository } from "../../repositories/implementations/InMemoryIngredientRepository";
import { CreateIngredientUseCase } from "./CreateIngredientUseCase";
import { CreateFoodUseCase } from "../CreateFood/CreateFoodUseCase";
import { Food } from "../../entities/Food";
import { Ingredient } from "../../entities/Ingredient";

describe("Ingredient object creation", () => {
  test("First time data input - all attributes should be calculated", () => {
    const foodData = {
      name: "Frango sassami",
      calories: 93.98,
      weight: 100,
      unit: "g",
    };

    const food = new Food(
      foodData.name, foodData.calories, foodData.weight, foodData.unit
    );

    const ingredientData = {
      name: "Frango sassami grelhado",
      amount: 150,
      amountUnit: "g"
    };
    const ingredient = new Ingredient(
      ingredientData.name, ingredientData.amount, ingredientData.amountUnit, food
    );

    expect(ingredient.id).not.toBeNull();
    expect(ingredient.name).toEqual(ingredientData.name);
    expect(ingredient.amount).toEqual(ingredientData.amount);
    expect(ingredient.amountUnit).toEqual(ingredientData.amountUnit);
    expect(ingredient.calories).toEqual(food.caloriesPerUnit * ingredientData.amount);
    expect(ingredient.food).toEqual(food);
  });

  test("convert kg to g", () => {
  });

  test("convert l to ml", () => {
  });

  test("expect error when sending different units", () => {
  });

  test("", () => {
  });

  test("", () => {
  });

  test("", () => {
  });

  test("", () => {
  });
})
