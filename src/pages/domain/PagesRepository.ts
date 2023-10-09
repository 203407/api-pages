import { Pages } from "./pages";

export interface PagesRepository {
  createPage(pages: Pages): Promise<Pages | null | boolean>;
  getPagesByNombre(nombre: string): Promise<Pages[] | null>;
  getPagesByFecha(f1: string, f2: string): Promise<Pages[] | null>;
}
