"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagFromPathRouter = void 0;
const getTagFromPathRouter = (path) => {
    const tagName = path.split("/")[1];
    const firstLetterUpperCase = tagName[0].toUpperCase();
    return `${firstLetterUpperCase}${tagName.slice(1, tagName.length)}`;
};
exports.getTagFromPathRouter = getTagFromPathRouter;
//# sourceMappingURL=getTagFromPathRouter.js.map