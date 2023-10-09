import { PageARepository } from "../domain/UsuarioRepository";

export class GetPagesAUsecase {
  constructor(readonly pagesARepository: PageARepository) {}

  async run() {
    const pagesA = await this.pagesARepository.getPagesA();
    return pagesA;
  }
}
