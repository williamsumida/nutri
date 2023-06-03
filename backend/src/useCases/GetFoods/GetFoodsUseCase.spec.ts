import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryFoodRepository } from "../../repositories/implementations/InMemoryFoodRepository";
import { GetFoodsUseCase } from "./GetFoodsUseCase";
import { CreateFoodUseCase } from "../CreateFood/CreateFoodUseCase";
import { Food } from "../../entities/Food";

let inMemoryFoodRepository: InMemoryFoodRepository;
let getFoodsUseCase: GetFoodsUseCase;
let createFoodUseCase: CreateFoodUseCase;

describe("Fetching all foods from the database", () => {
  beforeEach(() => {
    inMemoryFoodRepository = new InMemoryFoodRepository();
    getFoodsUseCase = new GetFoodsUseCase(inMemoryFoodRepository);
    createFoodUseCase = new CreateFoodUseCase(inMemoryFoodRepository);
  });

  it("should return an empty list", async () => {
    const foods = await getFoodsUseCase.execute();
    expect(foods).toEqual([]);
  });

  it("should return all inserted foods", async () => {
    const food_data1 = {
      name: "Frango sassami",
      calories: 93.98,
      weight: 100,
      unit: "grams",
    };

    const food_data2 = {
      name: "Frango sassami",
      calories: 93.98,
      weight: 100,
      unit: "grams",
    };

    const food1 = await createFoodUseCase.execute(food_data1);
    const food2 = await createFoodUseCase.execute(food_data2);

    const foods = await getFoodsUseCase.execute();

    expect(foods).toEqual([food1, food2]);
  });
})
