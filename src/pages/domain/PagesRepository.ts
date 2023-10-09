import { Pages } from "./pages";


export interface PagesRepository {

  createPage(pages: Pages): Promise<Pages | null | boolean>;  
  getPagesByNombre(nombre:String): Promise<Pages[] | null>;
  getPagesByFecha(f1:String,f2:String): Promise<Pages[] | null>;
}
