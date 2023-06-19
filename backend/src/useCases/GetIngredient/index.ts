import { PostgresIngredientRepository } from "../../repositories/implementations/PostgresIngredientRepository";
import { GetIngredientController } from "./GetIngredientController";
import { GetIngredientUseCase } from "./GetIngredientUseCase";

const postgresIngredientRepository = new PostgresIngredientRepository();
const getIngredientUseCase = new GetIngredientUseCase(postgresIngredientRepository);
const getIngredientController = new GetIngredientController(getIngredientUseCase);

export { getIngredientController };
