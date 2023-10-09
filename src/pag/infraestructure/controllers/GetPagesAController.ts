import { Request, Response } from "express";

import { GetPagesAUsecase } from "../../application/GetPagesAUsecase";

export class GetPagesAController {
  constructor(readonly getPagesAUseCase: GetPagesAUsecase) {}

  async run(req: Request, res: Response) {
    try {
      const pagesA = await this.getPagesAUseCase.run();
      res.status(200).json(pagesA);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
