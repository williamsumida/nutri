import { describe, it, expect, beforeEach } from "vitest";
import { CreateFoodUseCase } from "./CreateFoodUseCase";
import { InMemoryFoodRepository } from "../../repositories/implementations/InMemoryFoodRepository";
import { Food } from "../../entities/Food";

let inMemoryFoodRepository: InMemoryFoodRepository;
let createFoodUseCase: CreateFoodUseCase;

describe("Creating Food", () => {
  beforeEach(() => {
    inMemoryFoodRepository = new InMemoryFoodRepository();
    createFoodUseCase = new CreateFoodUseCase(inMemoryFoodRepository);
  });

  it("should be able to create a food object", async () => {
    const data = {
      name: "Frango sassami",
      calories: 93.98,
      weight: 100,
      unit: "grams",
    };

    const { name, calories, weight, unit } = data;
    const testFood = new Food(name, calories, weight, unit);

    const createdFood = await createFoodUseCase.execute(data);

    expect(createdFood.name).toEqual(testFood.name);
    expect(createdFood.calories).toEqual(testFood.calories);
    expect(createdFood.weight).toEqual(testFood.weight);
    expect(createdFood.unit).toEqual(testFood.unit);
    expect(createdFood.caloriesPerUnit).toEqual(testFood.caloriesPerUnit);
    expect(createdFood.id).not.toEqual(testFood.id);
  });

  it("should create a food and insert it into the database", async () => {
    const data = {
      name: "Frango sassami",
      calories: 93.98,
      weight: 100,
      unit: "grams",
    };

    const createdFood = await createFoodUseCase.execute(data);
    const databaseFood = await inMemoryFoodRepository.findById(createdFood.id);

    expect(createdFood).toEqual(databaseFood);
  });
});
