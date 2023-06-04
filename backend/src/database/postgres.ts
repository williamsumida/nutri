import postgres from 'postgres';
import logger from "../logger";

export const db = postgres({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});


logger.info("Connected to the database");
