export type RequestParameters = {
  in: "path" | "query" | "body";
  name: string;
  description?: string;
  schema?: {
    type: "object";
  };
};

export type Endpoint = {
  description?: string;
  responses?: any;
  tags?: string[];
  parameters?: RequestParameters[];
};

type EndpointSpecObject = Record<string, Endpoint>;

export type SwaggerJson = {
  openapi: string;
  info: {
    title?: string;
    description?: string;
    version?: string;
  };
  paths: Record<string, EndpointSpecObject>;
};
