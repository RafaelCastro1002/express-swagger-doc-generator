import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join, sep } from "path";
import { ROOT_TARGET_PATH } from "..";

export const writeFile = (path: string, content: any) => {
  try {
    const folderPath = getFolderPath(path);

    mkdirSync(folderPath, { recursive: true });
    return writeFileSync(path, content, "utf-8");
  } catch (e) {
    console.log(e);
  }
};

export const existFileDir = (path: string) => {
  try {
    return existsSync(path);
  } catch (err) {
    return false;
  }
};

const getFolderPath = (path: string) => {
  const tokensFolderPath = path.replace(ROOT_TARGET_PATH, "").split(sep);

  tokensFolderPath.pop();

  return join(...tokensFolderPath);
};
