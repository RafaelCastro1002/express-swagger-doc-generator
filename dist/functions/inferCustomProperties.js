"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferCustomProperties = void 0;
const inferCustomProperties = (swaggerJson, options) => {
    const keys = Object.keys(options || {});
    if (keys.includes("info")) {
        swaggerJson.info = Object.assign(Object.assign({}, swaggerJson.info), options === null || options === void 0 ? void 0 : options.info);
    }
};
exports.inferCustomProperties = inferCustomProperties;
//# sourceMappingURL=inferCustomProperties.js.map