// TODO: convert to other units
export function convertToGrams(weight: number, unit: string): number {
  if (unit.toLowerCase() === "kg") {
    return weight / 1000;
  }

  return weight;
}

// TODO: convert to other units
export function convertToMililiters(volume: number, unit: string): number {
  if (unit.toLowerCase() === "l") {
    return volume / 1000;
  }
  return volume;
}
