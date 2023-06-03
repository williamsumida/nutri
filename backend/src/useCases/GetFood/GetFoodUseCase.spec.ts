import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryFoodRepository } from "../../repositories/implementations/InMemoryFoodRepository";
import { GetFoodUseCase } from "./GetFoodUseCase";
import { CreateFoodUseCase } from "../CreateFood/CreateFoodUseCase";
import { Food } from "../../entities/Food";

let inMemoryFoodRepository: InMemoryFoodRepository;
let getFoodUseCase: GetFoodUseCase;
let createFoodUseCase: CreateFoodUseCase;

describe("Fetching specific food from the database", () => {
  beforeEach(() => {
    inMemoryFoodRepository = new InMemoryFoodRepository();
    getFoodUseCase = new GetFoodUseCase(inMemoryFoodRepository);
    createFoodUseCase = new CreateFoodUseCase(inMemoryFoodRepository);
  });


  it("should return searched food", async () => {
    const food_data = {
      name: "Frango sassami",
      calories: 93.98,
      weight: 100,
      unit: "grams",
    };

    const food = await createFoodUseCase.execute(food_data);
    const { id } = food;

    const fetched_food = await getFoodUseCase.execute({ id });

    expect(fetched_food).toEqual(food);
  });
})
