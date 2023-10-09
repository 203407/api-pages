import { PagesRepository } from "../domain/PagesRepository";

export class GetPagesByNombreUsecase {
  constructor(readonly pagesRepository: PagesRepository) {}

  async run(nombre:String) {
    const pages = await this.pagesRepository.getPagesByNombre(nombre);
    return pages;
  }
}
