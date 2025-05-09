import { SwaggerJson } from "./swaggerJsonSpec";
export type SwaggerDocOptions = {
    info?: SwaggerJson["info"];
    /**
     * @default "{rootProject}/swagger.json"
     * @argument "Pass a relative path from the project root"
     * */
    outputJsonPath?: string;
    /** @default "/doc" */
    uiAccessRoute?: string;
};
