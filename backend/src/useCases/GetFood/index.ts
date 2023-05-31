import { InMemoryFoodRepository } from "../../repositories/implementations/InMemoryFoodRepository";
import { GetFoodController } from "./GetFoodController";
import { GetFoodUseCase } from "./GetFoodUseCase";

const inMemoryFoodRepository = new InMemoryFoodRepository();
const getFoodUseCase = new GetFoodUseCase(inMemoryFoodRepository);
const getFoodController = new GetFoodController(getFoodUseCase);

export { getFoodController };
