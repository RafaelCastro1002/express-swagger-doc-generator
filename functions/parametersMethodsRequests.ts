import { RequestParameters } from "../@types/swaggerJsonSpec";
import {
  DEFAULT_BODY_PARAM_OPTIONS,
  DEFAULT_PATH_PARAM_OPTIONS,
} from "../constants/methodParameters";

export const getParametersFromMethodRouter = (methodName: string) => {
  const defaultMethodParametersByType = {
    post: [DEFAULT_BODY_PARAM_OPTIONS],
  };

  return defaultMethodParametersByType[methodName] || [];
};

export const getPathParamsFromMethod = (pathParamNames: string[]) => {
  let pathParams: RequestParameters[] = [];

  for (const paramName of pathParamNames) {
    pathParams.push({
      in: "path",
      name: paramName,
      ...DEFAULT_PATH_PARAM_OPTIONS,
    });
  }

  return pathParams;
};
