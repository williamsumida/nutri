ALTER TABLE "food" ALTER COLUMN "created_at" SET DEFAULT now();
ALTER TABLE "food" ALTER COLUMN "updated_at" SET DEFAULT now();
ALTER TABLE "ingredient" ALTER COLUMN "created_at" SET DEFAULT now();
ALTER TABLE "ingredient" ALTER COLUMN "updated_at" SET DEFAULT now();
ALTER TABLE "meal" ALTER COLUMN "created_at" SET DEFAULT now();
ALTER TABLE "meal" ALTER COLUMN "updated_at" SET DEFAULT now();
ALTER TABLE "meal_ingredients" ALTER COLUMN "created_at" SET DEFAULT now();
ALTER TABLE "meal_ingredients" ALTER COLUMN "updated_at" SET DEFAULT now();