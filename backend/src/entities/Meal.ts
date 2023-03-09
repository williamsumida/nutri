import { uuid } from "uuidv4";
import { Ingredient } from "./Ingredient";

export class Meal {
  public readonly id: string;
  public ingredients: Ingredient[];

  constructor(props: Omit<Meal, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  };
}
