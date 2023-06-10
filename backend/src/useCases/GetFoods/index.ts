import { PostgresFoodRepository } from "../../repositories/implementations/PostgresFoodRepository";
import { GetFoodsUseCase } from "./GetFoodsUseCase";
import { GetFoodsController } from "./GetFoodsController";

const postgresFoodRepository = new PostgresFoodRepository();
const getFoodsUseCase = new GetFoodsUseCase(postgresFoodRepository);
const getFoodsController = new GetFoodsController(getFoodsUseCase);

export { getFoodsUseCase, getFoodsController };

