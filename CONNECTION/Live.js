import {ANCHOR,AUDIO,BREAK,DIV,HEADER,HEADERTWO,HEADERTHREE,HEADERFOUR,HEADERFIVE,HEADERSIX,IFRAME,PARAGRAPH,TEXTAREA,VIDEO,BODIER,ADD,CHECK,CLEARCACHE,CONDITION,COPY,DEJSONIFICATION,DISPLAY,ELEMENTED,FETCH,FUNCTIONED,GETINDEX,JSONADDER,JSONIFICATION,JSONREMOVER,LOCALCLEAR,LOCALDELETE,LOCALSTORE,PROTECT,REDUX,ROUTE,SESSIONCLEAR,SESSIONDELETE,SESSIONSTORE,STORECACHE,STOREINDEX,ZOOM,COLOR,APPMODE,BODIED,CLEAR,CLICK,ONLINE} from "../LIBRARY/CONNECTION.js";

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
    const DATA=`ROUTED(localStorage.getItem("CLOUDNATIVE"));ROUTED(localStorage.getItem("AUTORUN"));ROUTED(localStorage.getItem("NATIVE"));`;
    localStorage.setItem("NATIVER",DATA);
    const DATA2=`BODIED();`;
    localStorage.setItem("AUTORUN",DATA2);
    localStorage.setItem("Native",new Date());
};
const DEVPROJECTLOADER=()=>{
    import("../DEVELOPMENT/index.js");
    const DATA=`ROUTED(localStorage.getItem("CLOUDNATIVE"));ROUTED(localStorage.getItem("AUTORUN"));ROUTED(localStorage.getItem("NATIVE"));`;
    localStorage.setItem("NATIVER",DATA);
    const DATA2=`BODIED();`;
    localStorage.setItem("AUTORUN",DATA2);
    localStorage.setItem("Native",new Date());
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
window.BODIER = BODIER;
window.BREAK = BREAK;
window.CHECK = CHECK;
window.CLEAR = CLEAR;
window.CLEARCACHE = CLEARCACHE;
window.CLICK = CLICK;
window.COLOR = COLOR;
window.CONDITION = CONDITION;
window.COPY = COPY;
window.DEJSONIFICATION = DEJSONIFICATION;
window.DISPLAY = DISPLAY;
window.DIV = DIV;
window.ELEMENTED = ELEMENTED;
window.FETCH = FETCH;
window.FUNCTIONED = FUNCTIONED;
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
window.ONLINE = ONLINE;
window.PARAGRAPH = PARAGRAPH;
window.PROTECT = PROTECT;
window.REDUX = REDUX;
window.ROUTE = ROUTE;
window.SESSIONCLEAR = SESSIONCLEAR;
window.SESSIONDELETE = SESSIONDELETE;
window.SESSIONSTORE = SESSIONSTORE;
window.STORECACHE = STORECACHE;
window.STOREINDEX = STOREINDEX;
window.TEXTAREA = TEXTAREA;
window.VIDEO = VIDEO;
window.ZOOM = ZOOM;

window.BODIED = BODIED();
PROJECTCONNECTOR();