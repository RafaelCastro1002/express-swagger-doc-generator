"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existFileDir = exports.writeFile = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const __1 = require("..");
const writeFile = (path, content) => {
    try {
        const folderPath = getFolderPath(path);
        (0, fs_1.mkdirSync)(folderPath, { recursive: true });
        return (0, fs_1.writeFileSync)(path, content, "utf-8");
    }
    catch (e) {
        console.log(e);
    }
};
exports.writeFile = writeFile;
const existFileDir = (path) => {
    try {
        return (0, fs_1.existsSync)(path);
    }
    catch (err) {
        return false;
    }
};
exports.existFileDir = existFileDir;
const getFolderPath = (path) => {
    const tokensFolderPath = path.replace(__1.ROOT_TARGET_PATH, "").split(path_1.sep);
    tokensFolderPath.pop();
    return (0, path_1.join)(...tokensFolderPath);
};
//# sourceMappingURL=file.js.map