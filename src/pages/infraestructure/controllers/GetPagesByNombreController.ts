import { Request, Response } from "express";
import { GetPagesByNombreUsecase } from "../../application/GetPagesByNombreUsecase";


export class GetPagesByNombreController {
  constructor(readonly getPagesByNombreUseCase : GetPagesByNombreUsecase ) {}

  async run(req: Request, res: Response) {     
    const formData = req.body;
    try {
      const pages = await this.getPagesByNombreUseCase.run(formData.nombre);      
      res.status(200).json(pages);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
