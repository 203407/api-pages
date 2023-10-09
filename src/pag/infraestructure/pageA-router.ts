import express from "express";

import { createPageAController, getPagesAController } from "./dependencies";

const pageARouter = express.Router();

pageARouter.post(
  "/pageA/create",
  createPageAController.run.bind(createPageAController)
);

pageARouter.get(
  "/pageA/get",
  getPagesAController.run.bind(getPagesAController)
);

export { pageARouter };
