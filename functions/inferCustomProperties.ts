import { SwaggerDocOptions } from "../@types/SwaggerGeneratorDoc";
import { SwaggerJson } from "../@types/swaggerJsonSpec";

export const inferCustomProperties = (
  swaggerJson: SwaggerJson,
  options?: SwaggerDocOptions
) => {
  const keys = Object.keys(options || {});

  if (keys.includes("info")) {
    swaggerJson.info = {
      ...swaggerJson.info,
      ...options?.info,
    };
  }
};
