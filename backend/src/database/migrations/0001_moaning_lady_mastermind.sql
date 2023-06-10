ALTER TABLE "food" ADD COLUMN "created_at" timestamp;
ALTER TABLE "food" ADD COLUMN "updated_at" timestamp;
ALTER TABLE "ingredient" ADD COLUMN "created_at" timestamp;
ALTER TABLE "ingredient" ADD COLUMN "updated_at" timestamp;
ALTER TABLE "meal" ADD COLUMN "created_at" timestamp;
ALTER TABLE "meal" ADD COLUMN "updated_at" timestamp;
ALTER TABLE "meal_ingredients" ADD COLUMN "created_at" timestamp;
ALTER TABLE "meal_ingredients" ADD COLUMN "updated_at" timestamp;