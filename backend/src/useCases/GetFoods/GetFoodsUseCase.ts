import { Food } from "../../entities/Food";
import { IFoodRepository } from "../../repositories/IFoodRepository";

export class GetFoodsUseCase {
  constructor(private foodRepository: IFoodRepository) { }

  async execute(data: IGetFoodsDTO) {
    return await this.foodRepository.findAll();
  }
}
