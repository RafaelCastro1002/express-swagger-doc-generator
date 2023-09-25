"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDocSwagger = exports.ROOT_TARGET_PATH = void 0;
const listEndpoints = require("express-list-endpoints");
const path_1 = require("path");
const swaggerUi = require("swagger-ui-express");
const functions_1 = require("./functions");
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
const JS_URL = "https://unpkg.com/swagger-ui-dist@3.23.1/swagger-ui-bundle.js";
exports.ROOT_TARGET_PATH = process.cwd();
const NAME_JSON_EXPORT = "swagger.json";
const getSwaggerJsonPath = (options) => (0, path_1.join)(exports.ROOT_TARGET_PATH, (options === null || options === void 0 ? void 0 : options.outputJsonPath) || NAME_JSON_EXPORT);
let LIST_ENDPOINTS = [];
const generateDocSwagger = (expressInstance, options) => {
    LIST_ENDPOINTS = listEndpoints(expressInstance);
    const swaggerJson = (0, functions_1.getBasicSwaggerJson)();
    (0, functions_1.insertPathsInSwaggerJson)(swaggerJson, LIST_ENDPOINTS);
    (0, functions_1.inferCustomProperties)(swaggerJson, options);
    (0, functions_1.updateSwaggerJsonFile)(getSwaggerJsonPath(options), swaggerJson);
    const routeExposeDoc = (options === null || options === void 0 ? void 0 : options.uiAccessRoute) || "/doc";
    console.log(`Swagger documentation on ${routeExposeDoc}`);
    const optionsUI = { customCssUrl: CSS_URL, customJs: JS_URL };
    expressInstance.use(routeExposeDoc, swaggerUi.serve, swaggerUi.setup(swaggerJson, optionsUI));
};
exports.generateDocSwagger = generateDocSwagger;
//# sourceMappingURL=index.js.map