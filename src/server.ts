import dotenv from "dotenv";
dotenv.config();

import express, { Response } from "express";
import { Request } from "./types";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import helmet from "helmet";

import logger from "./logger";

function requestIdMiddleware(request: Request, response: Response, next: any) {
  request.id = uuidv4();
  next();
}

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(requestIdMiddleware);


app.listen(port, () => {
  logger.info(`API Running on port ${port}`);
});
