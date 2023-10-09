import express from "express";

import {
  createPagesController,
  getPagesByFechaController,
  getPagesByNombreController,
} from "./dependencies";

const pagesRouter = express.Router();

pagesRouter.post(
  "/pages/create",
  createPagesController.run.bind(createPagesController)
);

pagesRouter.post(
  "/pages/get",
  getPagesByNombreController.run.bind(getPagesByNombreController)
);

pagesRouter.post(
  "/pages/get/fecha",
  getPagesByFechaController.run.bind(getPagesByFechaController)
);

export { pagesRouter };
