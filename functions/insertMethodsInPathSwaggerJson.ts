import { SwaggerJson } from "../@types/swaggerJsonSpec";
import { DEFAULT_METHOD_GENERAL_OPTIONS } from "../constants/methodParameters";
import { getTagFromPathRouter } from "./getTagFromPathRouter";
import {
  getParametersFromMethodRouter,
  getPathParamsFromMethod,
} from "./parametersMethodsRequests";

export const insertMethodsInPathSwaggerJson = (
  swaggerJson: SwaggerJson,
  path: string,
  methods: string[],
  pathParamNames: string[]
) => {
  const tag = getTagFromPathRouter(path);

  const pathParams = getPathParamsFromMethod(pathParamNames);

  for (const method of methods) {
    const formattedMethodName = method.toLowerCase() as
      | "post"
      | "put"
      | "patch"
      | "delete"
      | "get";

    const methodOptions = {
      ...DEFAULT_METHOD_GENERAL_OPTIONS,
      tags: [tag],
      parameters: [
        ...pathParams,
        ...(getParametersFromMethodRouter(formattedMethodName) as any),
      ],
    };

    swaggerJson.paths[path][formattedMethodName] = methodOptions;
  }
};
