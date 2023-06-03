import { pgTable, text, numeric } from 'drizzle-orm/pg-core';

export const food = pgTable('food', {
  id: text("id").primaryKey(),
  name: text('name'),
  calories: numeric('calories'),
  caloriesPerUnit: numeric('calories_per_unit'),
  weight: numeric('weight'),
  unit: text("unit")
});

