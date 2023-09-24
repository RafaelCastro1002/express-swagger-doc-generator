"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBasicSwaggerJson = void 0;
const BASIC_JSON = {
    openapi: "3.0.3",
    info: {
        title: "Swagger API Generator",
        description: "Library to generate swagger api documentation",
        version: "0.0.1",
    },
    paths: {},
};
const getBasicSwaggerJson = () => {
    return BASIC_JSON;
};
exports.getBasicSwaggerJson = getBasicSwaggerJson;
//# sourceMappingURL=getBasicSwaggerJson.js.map