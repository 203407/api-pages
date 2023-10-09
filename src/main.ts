// import { config as dotEnvConfig } from "dotenv";
// dotEnvConfig();

import bodyParser from "body-parser";
import express from "express";
import { config } from "./config";
import { healthRouter } from "./health/health-router";
import { pageARouter } from "./pag/infraestructure/pageA-router";
import cors from "cors"; // I
import { pagesRouter } from "./pages/infraestructure/pages-router";

function boostrap() {
  const app = express();
  
  app.use(cors({
    origin: "*",
  }));

  app.use(bodyParser.json());
  app.use("/health", healthRouter);
  app.use("/", pageARouter);
  app.use("/", pagesRouter);


    const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
