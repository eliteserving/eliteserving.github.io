import { PROJECT } from "./OTHERS/PROJECT/Connection.js";
export const FEATURES=()=>{
    const TITLE = document.title;
    if (TITLE === "EliteBuilder") {
        PROJECT();
    } else {
        switch (TITLE) {
            case "ANDROID":import(BUILDLINK+NAME+"/ANDROID/index.js");
                break;
            case "DESKTOP":import(BUILDLINK+NAME+"/DESKTOP/index.js");
                break;
            case "WEB":import(BUILDLINK+NAME+"/WEB/index.js");
                break;
            default:import("../DEVELOPMENT/index.js");
                break;
        };  
    };
};