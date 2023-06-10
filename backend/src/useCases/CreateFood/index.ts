import { PostgresFoodRepository } from "../../repositories/implementations/PostgresFoodRepository";
import { InMemoryFoodRepository } from "../../repositories/implementations/InMemoryFoodRepository";
import { CreateFoodUseCase } from "./CreateFoodUseCase";
import { CreateFoodController } from "./CreateFoodController";

const postgresFoodRepository = new PostgresFoodRepository();
const createFoodUseCase = new CreateFoodUseCase(postgresFoodRepository);
const createFoodController = new CreateFoodController(createFoodUseCase);
export { createFoodUseCase, createFoodController };
