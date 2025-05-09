import { RequestParameters } from "../@types/swaggerJsonSpec";
export declare const getParametersFromMethodRouter: (methodName: "post" | "put" | "patch" | "delete" | "get") => any[] | Partial<RequestParameters>[];
export declare const getPathParamsFromMethod: (pathParamNames: string[]) => RequestParameters[];
