import { Router } from "express";
import { menuRoutes } from "./menu.routes";
const routes = Router();

routes.use(menuRoutes);

export { routes };
