import { IFoodRepository } from "../../repositories/IFoodRepository";
import logger from "../../logger";

export class GetFoodsUseCase {
  constructor(private foodRepository: IFoodRepository) { }

  async execute() {
    logger.info({ message: "Fetching all food" });
    const foodList = await this.foodRepository.findAll();
    logger.info({ message: "Food list", foodList });
    return foodList;
  }
}
