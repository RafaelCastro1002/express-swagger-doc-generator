"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMethodsInPathSwaggerJson = void 0;
const methodParameters_1 = require("../constants/methodParameters");
const getTagFromPathRouter_1 = require("./getTagFromPathRouter");
const parametersMethodsRequests_1 = require("./parametersMethodsRequests");
const insertMethodsInPathSwaggerJson = (swaggerJson, path, methods, pathParamNames) => {
    const tag = (0, getTagFromPathRouter_1.getTagFromPathRouter)(path);
    const pathParams = (0, parametersMethodsRequests_1.getPathParamsFromMethod)(pathParamNames);
    for (const method of methods) {
        const formattedMethodName = method.toLowerCase();
        const methodOptions = Object.assign(Object.assign({}, methodParameters_1.DEFAULT_METHOD_GENERAL_OPTIONS), { tags: [tag], parameters: [
                ...pathParams,
                ...(0, parametersMethodsRequests_1.getParametersFromMethodRouter)(formattedMethodName),
            ] });
        swaggerJson.paths[path][formattedMethodName] = methodOptions;
    }
};
exports.insertMethodsInPathSwaggerJson = insertMethodsInPathSwaggerJson;
//# sourceMappingURL=insertMethodsInPathSwaggerJson.js.map