import { CreatePagesUsecase } from "../application/CreatePagesUsecase";
import { GetPagesByFechaUsecase } from "../application/GetPagesByFechaUsecase";
import { GetPagesByNombreUsecase } from "../application/GetPagesByNombreUsecase";
import { CreatePagesController } from "./controllers/CreatePagesController";
import { GetPagesByFechaController } from "./controllers/GetPagesByFechaController";
import { GetPagesByNombreController } from "./controllers/GetPagesByNombreController";
import { PostgresPagesRepository } from "./PostgresPagesRepository";

const postgresPagesRepository = new PostgresPagesRepository();

export const createPagesUseCase = new CreatePagesUsecase(
  postgresPagesRepository
);
export const createPagesController = new CreatePagesController(
  createPagesUseCase
);

export const getPagesByNombreUseCase = new GetPagesByNombreUsecase(
  postgresPagesRepository
);
export const getPagesByNombreController = new GetPagesByNombreController(
  getPagesByNombreUseCase
);

export const getPagesByFechaUseCase = new GetPagesByFechaUsecase(
  postgresPagesRepository
);
export const getPagesByFechaController = new GetPagesByFechaController(
  getPagesByFechaUseCase
);
