import { readFileSync } from "fs";
import { getDiff } from "recursive-diff";
import { SwaggerJson } from "../@types/swaggerJsonSpec";
import { existFileDir, writeFile } from "../utils/file";

export const updateSwaggerJsonFile = (
  pathFromSwaggerJson: string,
  swaggerJson: SwaggerJson
) => {
  const existFile = existFileDir(pathFromSwaggerJson);
  let existDiff = false;

  if (existFile) {
    existDiff = existDiffsInSwaggerJson(pathFromSwaggerJson, swaggerJson);
  }

  if (!existFile || existDiff) {
    writeFile(pathFromSwaggerJson, JSON.stringify(swaggerJson));

    console.log("Rewriting swagger json file");
  }
};

const existDiffsInSwaggerJson = (
  pathFromSwaggerJson: string,
  generatedSwaggerJson: SwaggerJson
) => {
  const jsonFile = readFileSync(pathFromSwaggerJson, { encoding: "utf-8" });

  return !!getDiff(jsonFile, generatedSwaggerJson).length;
};
