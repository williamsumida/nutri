import { IMealRepository } from "../../repositories/IMealRepository";

export class CreateMealUseCase {
  constructor(private mealRepository: IMealRepository) { }

  async execute() {
    this.mealRepository.create();
  }
}
