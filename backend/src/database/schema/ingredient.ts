import { pgTable, text, numeric } from 'drizzle-orm/pg-core';
import { food } from "./food";

export const ingredient = pgTable('ingredient', {
  id: text("id").primaryKey(),
  name: text('name'),
  amount: numeric('amount'),
  amountUnit: text("amount_unit"),
  foodId: text("food_id").references(() => food.id)
});

