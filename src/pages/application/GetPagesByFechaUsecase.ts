import { PagesRepository } from "../domain/PagesRepository";

export class GetPagesByFechaUsecase {
  constructor(readonly pagesRepository: PagesRepository) {}

  async run(f1: string, f2: string, nombre: string) {
    const pages = await this.pagesRepository.getPagesByFecha(f1, f2, nombre);
    return pages;
  }
}
