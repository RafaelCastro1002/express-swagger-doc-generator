import * as listEndpoints from "express-list-endpoints";
import { SwaggerJson } from "../@types/swaggerJsonSpec";
import { insertMethodsInPathSwaggerJson } from "./insertMethodsInPathSwaggerJson";

export const insertPathsInSwaggerJson = (
  swaggerJson: SwaggerJson,
  listEndpoints: listEndpoints.Endpoint[]
) => {
  for (const endpoint of listEndpoints) {
    const { path, methods } = endpoint;

    const pathParamNames = extractPathParamNames(path);

    const formattedPath = formatPathParamsFromRoutePath(path, pathParamNames);

    swaggerJson.paths[formattedPath] = {};

    insertMethodsInPathSwaggerJson(
      swaggerJson,
      formattedPath,
      methods,
      pathParamNames
    );
  }
};

// by chat gpt
const extractPathParamNames = (routePath: string) => {
  const pathParamRegex = /:(\w+)/g;
  const paramNames: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = pathParamRegex.exec(routePath)) !== null) {
    paramNames.push(match[1]);
  }

  return paramNames;
};

const formatPathParamsFromRoutePath = (
  routePath: string,
  pathParams: string[]
) => {
  for (const param of pathParams) {
    const currentPathParam = `:${param}`;
    const newerPathParamSyntax = `{${param}}`;

    routePath = routePath.replace(currentPathParam, newerPathParamSyntax);
  }

  return routePath;
};
