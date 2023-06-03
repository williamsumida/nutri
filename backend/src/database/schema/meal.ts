import { pgTable, text, numeric } from 'drizzle-orm/pg-core';
import { ingredient } from "./ingredient";

export const meal = pgTable('meal', {
  id: text("id").primaryKey(),
  calories: numeric('calories'),
});

export const mealIngredients = pgTable("meal_ingredients", {
  mealId: text("meal_id").references(() => meal.id),
  ingredientId: text("ingredient_id").references(() => ingredient.id)
})
