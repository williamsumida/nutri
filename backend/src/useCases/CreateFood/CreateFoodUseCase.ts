import { Food } from "../../entities/Food";
import { IFoodRepository } from "../../repositories/IFoodRepository";
import { ICreateFoodDTO } from "./CreateFoodDTO";
import logger from "../../logger";

export class CreateFoodUseCase {

  constructor(private foodRepository: IFoodRepository) { }

  async execute(data: ICreateFoodDTO) {
    const { name, calories, weight, unit } = data;
    const food = new Food(name, calories, weight, unit);
    logger.info(food);
    await this.foodRepository.save(food);
  }
}
