import { Request, Response } from "express";

import { GetPagesByFechaUsecase } from "../../application/GetPagesByFechaUsecase";
// import { format, parse } from 'date-fns';

export class GetPagesByFechaController {
  constructor(readonly getPagesByFechaUseCase: GetPagesByFechaUsecase) {}

  async run(req: Request, res: Response) {
    const formData = req.body;

    try {
      const pages = await this.getPagesByFechaUseCase.run(
        formData.f1,
        formData.f2,
        formData.nombre
      );
      res.status(200).json(pages);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
