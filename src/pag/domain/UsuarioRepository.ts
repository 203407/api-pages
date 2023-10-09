import { PageA } from "./pagesA";

export interface PageARepository {
  createPage(pageA: PageA): Promise<PageA | null | boolean>;
  getPagesA(): Promise<PageA[] | null>;
}
