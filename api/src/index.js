import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import morgan from "morgan";
import exception from "app/middlewares/exception";
import {protectedRoute} from "app/routers";
import {application} from "app/constants";

const app = express();
if (application.current_environment !== application.environments.testing) {
  const logger = morgan(":method :url :status :res[content-length] - :response-time ms");
  app.use(logger);
}

app
  .use(compression())
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use("/api", protectedRoute)
  .use(exception);

app.listen(application.server_port, console.log(`api rest listening on port ${application.server_port}`));

export default app;
