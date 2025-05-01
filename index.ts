import { Express } from "express";
import ListEndpoints, { Endpoint } from "express-list-endpoints";
import { join } from "path";
import * as swaggerUi from "swagger-ui-express";

import { SwaggerDocOptions } from "./@types/SwaggerGeneratorDoc";
import {
  getBasicSwaggerJson,
  inferCustomProperties,
  insertPathsInSwaggerJson,
  updateSwaggerJsonFile,
} from "./functions";

export const ROOT_TARGET_PATH = process.cwd();
const NAME_JSON_EXPORT = "swagger.json";

const getSwaggerJsonPath = (options?: SwaggerDocOptions) =>
  join(ROOT_TARGET_PATH, options?.outputJsonPath || NAME_JSON_EXPORT);

let LIST_ENDPOINTS: Endpoint[] = [];

export const generateDocSwagger = (
  expressInstance: Express,
  options?: SwaggerDocOptions
) => {
  LIST_ENDPOINTS = ListEndpoints(expressInstance);

  const swaggerJson = getBasicSwaggerJson();

  insertPathsInSwaggerJson(swaggerJson, LIST_ENDPOINTS);

  inferCustomProperties(swaggerJson, options);

  updateSwaggerJsonFile(getSwaggerJsonPath(options), swaggerJson);

  const routeExposeDoc = options?.uiAccessRoute || "/doc";

  console.log(`Swagger documentation on ${routeExposeDoc}`);

  expressInstance.use(
    routeExposeDoc,
    swaggerUi.serve,
    swaggerUi.setup(swaggerJson)
  );
};
