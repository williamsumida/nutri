import { IFoodRepository } from "../../repositories/IFoodRepository";
import { IGetFoodDTO } from "./GetFoodDTO";

export class GetFoodUseCase {
  constructor(
    private foodRepository: IFoodRepository
  ) { }

  async execute(data: IGetFoodDTO) {
    const { id } = data;
    return await this.foodRepository.findById(id);
  }
}
