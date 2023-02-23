import { uuid } from "uuidv4";
import { Ingredient } from "./Ingredient";

export class Menu {
  public readonly id: string;
  public ingredients: Ingredient[];

  constructor(props: Omit<Menu, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  };
}
