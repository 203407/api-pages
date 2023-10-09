import { PageARepository } from "../domain/UsuarioRepository";
import { PageA } from "../domain/pagesA";


export class CreatePageAUsecase {
  constructor(readonly pageARepository: PageARepository) {}

  async run(pageA: PageA) {
    const createPage = await this.pageARepository.createPage(pageA);
    return createPage;
  }
}
