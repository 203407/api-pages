import { PageA } from "../domain/pagesA";
import { PageARepository } from "../domain/UsuarioRepository";

export class CreatePageAUsecase {
  constructor(readonly pageARepository: PageARepository) {}

  async run(pageA: PageA) {
    const createPage = await this.pageARepository.createPage(pageA);
    return createPage;
  }
}
