import { IFoodRepository } from "../../repositories/IFoodRepository";

export class GetFoodsUseCase {
  constructor(private foodRepository: IFoodRepository) { }

  async execute() {
    return await this.foodRepository.findAll();
  }
}
