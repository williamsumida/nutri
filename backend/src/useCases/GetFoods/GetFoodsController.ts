
import { Request } from "../../types";
import { Response } from "express";
import { GetFoodsUseCase } from "./GetFoodsUseCase";

export class GetFoodsController {
  constructor(private getFoodsUseCase: GetFoodsUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const foods = await this.getFoodsUseCase.execute();
      return response.status(200).json({ foods });
    } catch (err) {
      return response.status(400).json({ message: err.message || "Unexpected error" });
    }
  }
}
