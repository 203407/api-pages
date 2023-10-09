import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

import { CreatePagesUsecase } from "../../application/CreatePagesUsecase";
import { Pages } from "../../domain/pages";

export class CreatePagesController {
  constructor(readonly createPagesUseCase : CreatePagesUsecase ) {}

  async run(req: Request, res: Response) {
    const formData = req.body;
        
    const uniqueId = String(uuidv4());


    try {             
      const pagesData = await this.createPagesUseCase.run(
        new Pages(
          uniqueId,
          formData.mostclick,         
          formData.location,         
          formData.sexo,         
          formData.seccionmost,                   
          formData.diasmost,  
          formData.namePage,
          formData.fecha,
        )
      );
      res.status(200).json(pagesData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  
  }
}
