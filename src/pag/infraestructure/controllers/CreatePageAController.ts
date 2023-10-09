import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { CreatePageAUsecase } from "../../application/CreateUsuarioUsecase";
import { PageA } from "../../domain/pagesA";

export class CreatePageAController {
  constructor(readonly createPageAUseCase : CreatePageAUsecase ) {}

  async run(req: Request, res: Response) {
    const formData = req.body;
    const uniqueId = String(uuidv4());
    
    try {               
      const pageData = await this.createPageAUseCase.run(
        new PageA(
          uniqueId,
          formData.nombre,         
          formData.url
        )
      );
      res.status(200).json(pageData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  
  }
}
