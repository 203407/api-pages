import { CreatePageAUsecase } from "../application/CreateUsuarioUsecase";
import { GetPagesAUsecase } from "../application/GetPagesAUsecase";
import { PostgresPageARepository } from "./PostgresPageARepository";
import { CreatePageAController } from "./controllers/CreatePageAController";
import { GetPagesAController } from "./controllers/GetPagesAController";



const postgresPageRepository = new PostgresPageARepository();

export const createPageAUseCase = new CreatePageAUsecase(
  postgresPageRepository
);
export const createPageAController = new CreatePageAController(
  createPageAUseCase
);

export const getPagesAUseCase = new GetPagesAUsecase(
  postgresPageRepository
);
export const getPagesAController = new GetPagesAController(
  getPagesAUseCase
);
