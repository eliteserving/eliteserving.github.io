export const FEATURES=()=>{
    const TITLE = document.title;
    const BUILDLINK="https://eliteserving.github.io/LIBRARY/CODE/OTHERS/";
    switch (TITLE) {
        case "Elite_Robust_Ontology":import(BUILDLINK+"MAIN"+"/Connection.js");
            break;
        case "Cinefy":import(BUILDLINK+"CINEFY"+"/Connection.js");
            break;
        case "Noor_Charity_And_Orphanage_Organisation":import(BUILDLINK+"NOOR"+"/Connection.js");
            break;
        case "Tafyz_Craft_Limited":import(BUILDLINK+"TAFYZ"+"/Connection.js");
            break;
        case "ShyLanSirajFashionHub":import(BUILDLINK+"SHYLANSIRAJ"+"/Connection.js");
            break;
        case "NaweriTenat":import(BUILDLINK+"NAWERITENAT"+"/Connection.js");
            break;
        default:import("./OTHERS/PROJECT/Connection.js");
            break;
    };  
};