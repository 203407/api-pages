import { PagesRepository } from "../domain/PagesRepository";
import { Pages } from "../domain/pages";

export class CreatePagesUsecase {
  constructor(readonly pagesRepository: PagesRepository) {}

  async run(pages: Pages) {
    const createPage = await this.pagesRepository.createPage(pages);
    return createPage;
  }
}
