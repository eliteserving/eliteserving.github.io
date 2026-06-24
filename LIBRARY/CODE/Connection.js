export const FEATURES=()=>{
    const TITLE = document.title;
    const BUILDLINK="https://eliteserving.github.io/BUILD/";
    switch (TITLE) {
        case "ANDROID":import(BUILDLINK+NAME+"/ANDROID/index.js");
            break;
        case "DESKTOP":import(BUILDLINK+NAME+"/DESKTOP/index.js");
            break;
        case "WEB":import(BUILDLINK+NAME+"/WEB/index.js");
            break;
        default:import("./OTHERS/PROJECT/Connection.js");
            break;
    };  
};