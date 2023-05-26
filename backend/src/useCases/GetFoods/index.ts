import { PostgresFoodRepository } from "../../repositories/implementations/PostgresFoodRepository";
import { InMemoryFoodRepository } from "../../repositories/implementations/InMemoryFoodRepository";
import { GetFoodsUseCase } from "./GetFoodsUseCase";
import { GetFoodsController } from "./GetFoodsController";

const inMemoryFoodRepository = new InMemoryFoodRepository();
const getFoodsUseCase = new GetFoodsUseCase(inMemoryFoodRepository);
const getFoodsController = new GetFoodsController(getFoodsUseCase);

export { getFoodsUseCase, getFoodsController };

