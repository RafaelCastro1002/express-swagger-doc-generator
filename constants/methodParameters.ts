import { Endpoint, RequestParameters } from "../@types/swaggerJsonSpec";

export const DEFAULT_METHOD_GENERAL_OPTIONS: Endpoint = {
  description: "",
  responses: {},
};

export const DEFAULT_PATH_PARAM_OPTIONS: Partial<RequestParameters> = {
  description: "Numeric or string type data here",
};

export const DEFAULT_BODY_PARAM_OPTIONS: Partial<RequestParameters> = {
  in: "body",
  name: "Generic body",
  schema: {
    type: "object",
  },
};
