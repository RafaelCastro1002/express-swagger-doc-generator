import { SwaggerJson } from "../@types/swaggerJsonSpec";

const BASIC_JSON: SwaggerJson = {
  openapi: "3.0.3",
  info: {
    title: "Swagger API Generator",
    description: "Library to generate swagger api documentation",
    version: "0.0.1",
  },
  paths: {},
};

export const getBasicSwaggerJson = () => {
  return BASIC_JSON;
};
