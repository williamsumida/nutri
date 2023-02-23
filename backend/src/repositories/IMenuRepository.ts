import { Menu } from "../entities/Menu";

export interface IMenuInterface {
  create(): Promise<void>;
  get(): Promise<Menu>;
  save(): Promise<void>;
}
