import { pgTable, text, numeric, timestamp } from 'drizzle-orm/pg-core';
import { ingredient } from "./ingredient";

export const meal = pgTable('meal', {
  id: text("id").primaryKey(),
  calories: numeric('calories'),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const mealIngredients = pgTable("meal_ingredients", {
  mealId: text("meal_id").references(() => meal.id),
  ingredientId: text("ingredient_id").references(() => ingredient.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
