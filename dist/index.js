"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDocSwagger = exports.ROOT_TARGET_PATH = void 0;
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
const path_1 = require("path");
const swaggerUi = __importStar(require("swagger-ui-express"));
const functions_1 = require("./functions");
exports.ROOT_TARGET_PATH = process.cwd();
const NAME_JSON_EXPORT = "swagger.json";
const getSwaggerJsonPath = (options) => (0, path_1.join)(exports.ROOT_TARGET_PATH, (options === null || options === void 0 ? void 0 : options.outputJsonPath) || NAME_JSON_EXPORT);
let LIST_ENDPOINTS = [];
const generateDocSwagger = (expressInstance, options) => {
    LIST_ENDPOINTS = (0, express_list_endpoints_1.default)(expressInstance);
    const swaggerJson = (0, functions_1.getBasicSwaggerJson)();
    (0, functions_1.insertPathsInSwaggerJson)(swaggerJson, LIST_ENDPOINTS);
    (0, functions_1.inferCustomProperties)(swaggerJson, options);
    (0, functions_1.updateSwaggerJsonFile)(getSwaggerJsonPath(options), swaggerJson);
    const routeExposeDoc = (options === null || options === void 0 ? void 0 : options.uiAccessRoute) || "/doc";
    console.log(`Swagger documentation on ${routeExposeDoc}`);
    expressInstance.use(routeExposeDoc, swaggerUi.serve, swaggerUi.setup(swaggerJson));
};
exports.generateDocSwagger = generateDocSwagger;
//# sourceMappingURL=index.js.map