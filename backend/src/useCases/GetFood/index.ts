import { PostgresFoodRepository } from "../../repositories/implementations/PostgresFoodRepository";
import { GetFoodController } from "./GetFoodController";
import { GetFoodUseCase } from "./GetFoodUseCase";

const postgresFoodRepository = new PostgresFoodRepository();
const getFoodUseCase = new GetFoodUseCase(postgresFoodRepository);
const getFoodController = new GetFoodController(getFoodUseCase);

export { getFoodController };
