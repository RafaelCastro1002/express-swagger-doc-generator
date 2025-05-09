import { Express } from "express";
import { SwaggerDocOptions } from "./@types/SwaggerGeneratorDoc";
export declare const ROOT_TARGET_PATH: string;
export declare const generateDocSwagger: (expressInstance: Express, options?: SwaggerDocOptions) => void;
