CREATE TABLE IF NOT EXISTS "food" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"calories" numeric,
	"calories_per_unit" numeric,
	"weight" numeric,
	"unit" text
);

CREATE TABLE IF NOT EXISTS "ingredient" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"amount" numeric,
	"amount_unit" text,
	"food_id" text
);

CREATE TABLE IF NOT EXISTS "meal" (
	"id" text PRIMARY KEY NOT NULL,
	"calories" numeric
);

CREATE TABLE IF NOT EXISTS "meal_ingredients" (
	"meal_id" text,
	"ingredient_id" text
);

DO $$ BEGIN
 ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_food_id_food_id_fk" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "meal_ingredients" ADD CONSTRAINT "meal_ingredients_meal_id_meal_id_fk" FOREIGN KEY ("meal_id") REFERENCES "meal"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "meal_ingredients" ADD CONSTRAINT "meal_ingredients_ingredient_id_ingredient_id_fk" FOREIGN KEY ("ingredient_id") REFERENCES "ingredient"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
