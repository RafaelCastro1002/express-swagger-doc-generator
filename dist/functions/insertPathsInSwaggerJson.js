"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertPathsInSwaggerJson = void 0;
const insertMethodsInPathSwaggerJson_1 = require("./insertMethodsInPathSwaggerJson");
const insertPathsInSwaggerJson = (swaggerJson, listEndpoints) => {
    for (const endpoint of listEndpoints) {
        const { path, methods } = endpoint;
        const pathParamNames = extractPathParamNames(path);
        const formattedPath = formatPathParamsFromRoutePath(path, pathParamNames);
        swaggerJson.paths[formattedPath] = {};
        (0, insertMethodsInPathSwaggerJson_1.insertMethodsInPathSwaggerJson)(swaggerJson, formattedPath, methods, pathParamNames);
    }
};
exports.insertPathsInSwaggerJson = insertPathsInSwaggerJson;
// by chat gpt
const extractPathParamNames = (routePath) => {
    const pathParamRegex = /:(\w+)/g;
    const paramNames = [];
    let match;
    while ((match = pathParamRegex.exec(routePath)) !== null) {
        paramNames.push(match[1]);
    }
    return paramNames;
};
const formatPathParamsFromRoutePath = (routePath, pathParams) => {
    for (const param of pathParams) {
        const currentPathParam = `:${param}`;
        const newerPathParamSyntax = `{${param}}`;
        routePath = routePath.replace(currentPathParam, newerPathParamSyntax);
    }
    return routePath;
};
//# sourceMappingURL=insertPathsInSwaggerJson.js.map