import { CINEFYPROJECT } from "./OTHERS/CINEFY/Connection.js";
import { MAINPROJECT } from "./OTHERS/MAIN/Connection.js";
import { NOORPROJECT } from "./OTHERS/NOOR/Connection.js";
import { FEATURESPROJECT } from "./OTHERS/PROJECT/Connection.js";
import { SHYLANSIRAJPROJECT } from "./OTHERS/SHYLANSIRAJ/Connection.js";
import { TAFYZPROJECT } from "./OTHERS/TAFYZ/Connection.js";

export const FEATURES=()=>{
    const TITLE = document.title;
    switch (TITLE) {
        case "Elite_Robust_Ontology":MAINPROJECT();
            break;
        case "Cinefy":CINEFYPROJECT();
            break;
        case "Noor_Charity_And_Orphanage_Organisation":NOORPROJECT();
            break;
        case "Tafyz_Craft_Limited":TAFYZPROJECT();
            break;
        case "ShyLanSirajFashionHub":SHYLANSIRAJPROJECT();
            break;
        default:FEATURESPROJECT();
            break;
    };  
};