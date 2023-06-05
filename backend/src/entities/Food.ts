import { v4 } from "uuid";

export class Food {
  public readonly id: string;

  public name: string;
  public calories: number;
  public caloriesPerUnit: number;
  public weight: number;
  public unit: string;

  constructor(name: string, calories: number, weight: number, unit: string, caloriesPerUnit?: number, id?: string) {
    this.id = id;
    this.name = name;
    this.calories = calories;
    this.caloriesPerUnit = caloriesPerUnit;
    this.weight = weight;
    // TODO: save in ml and g only
    this.unit = unit;

    if (!caloriesPerUnit) {
      this.caloriesPerUnit = this.calculateCaloriesPerUnit();
    }

    if (!id) {
      this.id = v4();
    }
  }

  calculateCaloriesPerUnit(): number {
    return this.calories / this.weight;
  }
}
