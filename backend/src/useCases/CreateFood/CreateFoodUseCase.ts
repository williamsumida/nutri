import { Food } from "../../entities/Food";
import { IFoodRepository } from "../../repositories/IFoodRepository";
import { ICreateFoodDTO } from "./CreateFoodDTO";

export class CreateFoodUseCase {

  constructor(private foodRepository: IFoodRepository) { }

  async execute(data: ICreateFoodDTO) {
    const food = new Food(data);
    await this.foodRepository.save(food);
  }
}
