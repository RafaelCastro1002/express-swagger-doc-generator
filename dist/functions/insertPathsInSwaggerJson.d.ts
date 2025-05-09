import * as listEndpoints from "express-list-endpoints";
import { SwaggerJson } from "../@types/swaggerJsonSpec";
export declare const insertPathsInSwaggerJson: (swaggerJson: SwaggerJson, listEndpoints: listEndpoints.Endpoint[]) => void;
