import { Food } from "../../entities/Food";
import { IFoodRepository } from "../../repositories/IFoodRepository";
import { ICreateFoodDTO } from "./CreateFoodDTO";
import logger from "../../logger";

export class CreateFoodUseCase {

  constructor(private foodRepository: IFoodRepository) { }

  async execute(data: ICreateFoodDTO): Promise<Food> {
    logger.info({ message: "Creating Food", data });

    const { name, calories, weight, unit } = data;
    const food = new Food(name, calories, weight, unit);
    const createdFood = await this.foodRepository.save(food);

    logger.info({ message: "Created Food", createdFood });
    return createdFood;
  }
}
