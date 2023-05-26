import { PostgresFoodRepository } from "../../repositories/implementations/PostgresFoodRepository";
import { InMemoryFoodRepository } from "../../repositories/implementations/InMemoryFoodRepository";
import { CreateFoodUseCase } from "./CreateFoodUseCase";
import { CreateFoodController } from "./CreateFoodController";

const inMemoryFoodRepository = new InMemoryFoodRepository();
const postgresFoodRepository = new PostgresFoodRepository();
const createFoodUseCase = new CreateFoodUseCase(inMemoryFoodRepository);
const createFoodController = new CreateFoodController(createFoodUseCase);
export { createFoodUseCase, createFoodController };
