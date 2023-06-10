import dotenv from "dotenv";
dotenv.config();

import "./database/migration";
import "./database/postgres";

import { AppError } from "./errors/AppError";
import express, { Response, NextFunction } from "express";
import { Request } from "./types";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import helmet from "helmet";

import logger from "./logger";
import { routes } from "./routes";

function requestIdMiddleware(request: Request, response: Response, next: NextFunction) {
  request.id = uuidv4();
  next();
}

function errorMiddleware(err: Error, request: Request, response: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`
  });
}

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(requestIdMiddleware);
app.use(errorMiddleware);

app.use("/", routes);

app.listen(port, () => {
  logger.info(`API Running on port ${port}`);
});
