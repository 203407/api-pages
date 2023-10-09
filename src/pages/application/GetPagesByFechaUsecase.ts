import { PagesRepository } from "../domain/PagesRepository";

export class GetPagesByFechaUsecase {
  constructor(readonly pagesRepository: PagesRepository) {}

  async run(f1: string, f2: string) {
    const pages = await this.pagesRepository.getPagesByFecha(f1, f2);
    return pages;
  }
}
