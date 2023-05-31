import { v4 } from "uuid";

export class Food {
  public readonly id: string;

  public name: string;
  public calories: number;
  public caloriesPerUnit: number;
  public weight: number;
  public unit: string;

  constructor(name: string, calories: number, weight: number, unit: string, caloriesPerUnit?: number, id?: string) {
    this.name = name;
    this.calories = calories;
    this.weight = weight;
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
