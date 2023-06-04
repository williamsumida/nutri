import { pgTable, text, numeric, timestamp } from 'drizzle-orm/pg-core';
import { food } from "./food";

export const ingredient = pgTable('ingredient', {
  id: text("id").primaryKey(),
  name: text('name'),
  amount: numeric('amount'),
  amountUnit: text("amount_unit"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  foodId: text("food_id").references(() => food.id)
});

