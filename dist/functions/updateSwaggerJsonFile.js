"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSwaggerJsonFile = void 0;
const fs_1 = require("fs");
const recursive_diff_1 = require("recursive-diff");
const file_1 = require("../utils/file");
const updateSwaggerJsonFile = (pathFromSwaggerJson, swaggerJson) => {
    const existFile = (0, file_1.existFileDir)(pathFromSwaggerJson);
    let existDiff = false;
    if (existFile) {
        existDiff = existDiffsInSwaggerJson(pathFromSwaggerJson, swaggerJson);
    }
    if (!existFile || existDiff) {
        (0, file_1.writeFile)(pathFromSwaggerJson, JSON.stringify(swaggerJson));
        console.log("Rewriting swagger json file");
    }
};
exports.updateSwaggerJsonFile = updateSwaggerJsonFile;
const existDiffsInSwaggerJson = (pathFromSwaggerJson, generatedSwaggerJson) => {
    const stringJsonFile = (0, fs_1.readFileSync)(pathFromSwaggerJson, {
        encoding: "utf-8",
    });
    const jsonFile = JSON.parse(stringJsonFile);
    return !!(0, recursive_diff_1.getDiff)(jsonFile, generatedSwaggerJson).length;
};
//# sourceMappingURL=updateSwaggerJsonFile.js.map