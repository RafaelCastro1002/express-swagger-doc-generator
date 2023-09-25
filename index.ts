import * as listEndpoints from "express-list-endpoints";
import { Express } from "express-serve-static-core";
import { join } from "path";
import * as swaggerUi from "swagger-ui-express";

import { SwaggerDocOptions } from "./@types/SwaggerGeneratorDoc";
import {
  getBasicSwaggerJson,
  inferCustomProperties,
  insertPathsInSwaggerJson,
  updateSwaggerJsonFile,
} from "./functions";

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
const JS_URL = "https://unpkg.com/swagger-ui-dist@3.23.1/swagger-ui-bundle.js";

export const ROOT_TARGET_PATH = process.cwd();
const NAME_JSON_EXPORT = "swagger.json";

const getSwaggerJsonPath = (options?: SwaggerDocOptions) =>
  join(ROOT_TARGET_PATH, options?.outputJsonPath || NAME_JSON_EXPORT);

let LIST_ENDPOINTS: listEndpoints.Endpoint[] = [];

export const generateDocSwagger = (
  expressInstance: Express,
  options?: SwaggerDocOptions
) => {
  LIST_ENDPOINTS = listEndpoints(expressInstance);

  const swaggerJson = getBasicSwaggerJson();

  insertPathsInSwaggerJson(swaggerJson, LIST_ENDPOINTS);

  inferCustomProperties(swaggerJson, options);

  updateSwaggerJsonFile(getSwaggerJsonPath(options), swaggerJson);

  const routeExposeDoc = options?.uiAccessRoute || "/doc";

  console.log(`Swagger documentation on ${routeExposeDoc}`);

  const optionsUI = { customCssUrl: CSS_URL, customJs: JS_URL };

  expressInstance.use(
    routeExposeDoc,
    swaggerUi.serve,
    swaggerUi.setup(swaggerJson, optionsUI)
  );
};
