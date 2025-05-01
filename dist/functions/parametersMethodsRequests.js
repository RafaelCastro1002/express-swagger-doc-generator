"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathParamsFromMethod = exports.getParametersFromMethodRouter = void 0;
const methodParameters_1 = require("../constants/methodParameters");
const getParametersFromMethodRouter = (methodName) => {
    const defaultMethodParametersByType = {
        post: [methodParameters_1.DEFAULT_BODY_PARAM_OPTIONS],
        put: [methodParameters_1.DEFAULT_BODY_PARAM_OPTIONS],
        patch: [methodParameters_1.DEFAULT_BODY_PARAM_OPTIONS],
        delete: [],
        get: [],
    };
    return defaultMethodParametersByType[methodName];
};
exports.getParametersFromMethodRouter = getParametersFromMethodRouter;
const getPathParamsFromMethod = (pathParamNames) => {
    let pathParams = [];
    for (const paramName of pathParamNames) {
        pathParams.push(Object.assign({ in: "path", name: paramName }, methodParameters_1.DEFAULT_PATH_PARAM_OPTIONS));
    }
    return pathParams;
};
exports.getPathParamsFromMethod = getPathParamsFromMethod;
//# sourceMappingURL=parametersMethodsRequests.js.map