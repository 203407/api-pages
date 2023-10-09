import { Request, Response } from "express";

import { GetPagesByFechaUsecase } from "../../application/GetPagesByFechaUsecase";
// import { format, parse } from 'date-fns';

export class GetPagesByFechaController {
  constructor(readonly getPagesByFechaUseCase: GetPagesByFechaUsecase) {}

  async run(req: Request, res: Response) {
    const formData = req.body;

    // const fechaParseada1 = parse(formData.f1, 'yyyy-MM-dd', new Date());
    // const f1 = format(fechaParseada1, 'dd/MM/yyyy');
    // const fechaParseada2  = parse(formData.f2, 'yyyy-MM-dd', new Date());
    // const f2 = format(fechaParseada2, 'dd/MM/yyyy');

    try {
      const pages = await this.getPagesByFechaUseCase.run(
        formData.f1,
        formData.f2
      );
      res.status(200).json(pages);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
