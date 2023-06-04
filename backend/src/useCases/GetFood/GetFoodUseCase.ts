import { IFoodRepository } from "../../repositories/IFoodRepository";
import { IGetFoodDTO } from "./GetFoodDTO";
import logger from "../../logger";

export class GetFoodUseCase {
  constructor(
    private foodRepository: IFoodRepository
  ) { }

  async execute(data: IGetFoodDTO) {
    const { id } = data;
    logger.info({ message: "Fetching food", foodId: id });
    const food = await this.foodRepository.findById(id);
    logger.info({ message: "Food", food });
    return food;
  }
}
