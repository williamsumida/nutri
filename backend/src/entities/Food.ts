import { uuid } from "uuidv4";
export class Food {
  public readonly id: string;

  public name: string;
  public calories: number;
  public caloriesPerUnit: number;
  public weight: number;
  public unit: string;

  constructor(props: Omit<Food, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
