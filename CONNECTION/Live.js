import {ANCHOR,AUDIO,BREAK,DIV,HEADER,HEADERTWO,HEADERTHREE,HEADERFOUR,HEADERFIVE,HEADERSIX,IFRAME,PARAGRAPH,TEXTAREA,VIDEO,BODIER,ADD,CONDITION,COPY,DEJSONIFICATION,DISPLAY,FETCH,GETINDEX,JSONADDER,JSONIFICATION,JSONREMOVER,LOCALCLEAR,LOCALDELETE,LOCALSTORE,PROTECT,REDUX,ROUTE,SESSIONCLEAR,SESSIONDELETE,SESSIONSTORE,STOREINDEX,ZOOM,COLOR,APPMODE,BODIED,CLEAR} from "../LIBRARY/CONNECTION.js";

const BUILDLINK="https://webserving.github.io/BUILD/";
const TITLE = document.title;
const PROJECTLOADER=(NAME)=>{
    const DEV=localStorage.getItem("ENV");
    switch (DEV) {
        case "ANDROID":import(BUILDLINK+NAME+"/ANDROID/index.js");
            break;
        case "DESKTOP":import(BUILDLINK+NAME+"/DESKTOP/index.js");
            break;
        default:import(BUILDLINK+NAME+"/WEB/index.js");
            break;
    };
    localStorage.setItem("Native",new Date());
    const DATA=`ROUTED(localStorage.getItem("CLOUDNATIVE"));ROUTED(localStorage.getItem("NATIVE"));`;
    localStorage.setItem("NATIVER",DATA);
    if(!localStorage.getItem("Updates")){
        location.reload();
    };
};
const DEVPROJECTLOADER=()=>{
    import("../DEVELOPMENT/index.js");
    localStorage.setItem("Native",new Date());
    const DATA=`ROUTED(localStorage.getItem("CLOUDNATIVE"));ROUTED(localStorage.getItem("NATIVE"));`;
    localStorage.setItem("NATIVER",DATA);
    if(!localStorage.getItem("Updates")){
        location.reload();
    };
};
const PROJECTCONNECTOR=()=>{
    switch (TITLE) {
        case "EliteBuilder":DEVPROJECTLOADER();
            break;
        case "Elite_Robust_Ontology":PROJECTLOADER("MAIN");
            break;
        default:
            break;
    };
};

window.ADD = ADD;
window.ANCHOR = ANCHOR;
window.APPMODE = APPMODE;
window.AUDIO = AUDIO;
window.BODIED = BODIED;
window.BODIER = BODIER;
window.BREAK = BREAK;
window.CLEAR = CLEAR;
window.COLOR = COLOR;
window.CONDITION = CONDITION;
window.COPY = COPY;
window.DEJSONIFICATION = DEJSONIFICATION;
window.DISPLAY = DISPLAY;
window.DIV = DIV;
window.FETCH = FETCH;
window.GETINDEX = GETINDEX;
window.HEADER = HEADER;
window.HEADERFIVE = HEADERFIVE;
window.HEADERFOUR = HEADERFOUR;
window.HEADERSIX = HEADERSIX;
window.HEADERTHREE = HEADERTHREE;
window.HEADERTWO = HEADERTWO;
window.IFRAME = IFRAME;
window.JSONADDER = JSONADDER;
window.JSONIFICATION = JSONIFICATION;
window.JSONREMOVER = JSONREMOVER;
window.LOCALCLEAR = LOCALCLEAR;
window.LOCALDELETE = LOCALDELETE;
window.LOCALSTORE = LOCALSTORE;
window.PARAGRAPH = PARAGRAPH;
window.PROTECT = PROTECT;
window.REDUX = REDUX;
window.ROUTE = ROUTE;
window.SESSIONCLEAR = SESSIONCLEAR;
window.SESSIONDELETE = SESSIONDELETE;
window.SESSIONSTORE = SESSIONSTORE;
window.STOREINDEX = STOREINDEX;
window.TEXTAREA = TEXTAREA;
window.VIDEO = VIDEO;
window.ZOOM = ZOOM;

PROJECTCONNECTOR();