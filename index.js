import {ADD,ANCHOR,AUDIO,BODIER,BREAK,COLOR,CONDITION,COPY,DEJSONIFICATION,DISPLAY,DIV,FETCH,GETINDEX,HEADER,HEADERFIVE,HEADERFOUR,HEADERSIX,HEADERTHREE,HEADERTWO,IFRAME,JSONADDER,JSONIFICATION,JSONREMOVER,LOCALCLEAR,LOCALDELETE,LOCALSTORE,PARAGRAPH,PROTECT,REDUX,ROUTE,SESSIONCLEAR,SESSIONDELETE,SESSIONSTORE,STOREINDEX,TEXTAREA,VIDEO,ZOOM} from "./LIBRARY/CONNECTION.js";

const PROJECTLOADER=(NAME)=>{
    const BUILDLINK="https://webserving.github.io/BUILD/"
    if (!localStorage.getItem("Native")) {
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
        DATAPROCESS();
    } else {
        const FETCHER=(LINK)=>{
            fetch(LINK)
            .then(res => res.text())
            .then(data => {
                const storedData = localStorage.getItem("NATIVE");
                if (storedData === null) {
                    localStorage.setItem("NATIVE", data);
                } else if (data !== storedData) {
                    localStorage.setItem("NATIVE", data);
                    location.reload();
                };
            })
            .catch(error => {
                console.error("Failed to fetch index.js:", error);
            });
        };
        const DEV=localStorage.getItem("ENV");
        switch (DEV) {
            case "ANDROID": FETCHER(BUILDLINK+NAME+"/ANDROID/index.js");
                break;
            case "DESKTOP":FETCHER(BUILDLINK+NAME+"/DESKTOP/index.js");
                break;
            default:FETCHER(BUILDLINK+NAME+"/WEB/index.js");
                break;
        };
    };
};

const DEVPROJECTLOADER=()=>{
    if (!localStorage.getItem("Native")) {
        import("./DEVELOPMENT/index.js");
        localStorage.setItem("Native",new Date());
        const DATA=`ROUTED(localStorage.getItem("CLOUDNATIVE"));ROUTED(localStorage.getItem("NATIVE"));`;
        localStorage.setItem("NATIVER",DATA);
        DATAPROCESS();
    } else {
        fetch("./DEVELOPMENT/index.js")
        .then(res => res.text())
        .then(data => {
            const storedData = localStorage.getItem("NATIVE");
            if (storedData === null) {
                localStorage.setItem("NATIVE", data);
            } else if (data !== storedData) {
                localStorage.setItem("NATIVE", data);
                location.reload();
            };
        })
        .catch(error => {
            console.error("Failed to fetch index.js:", error);
        });
    };
};

const PROJECTCONNECTOR=()=>{
    const TITLE = document.title;
    switch (TITLE) {
        case "EliteBuilder":DEVPROJECTLOADER();
            break;
        case "Elite_Robust_Ontology":PROJECTLOADER("MAIN");
            break;
        default:
            break;
    };
};

const DATAPROCESS=()=>{
    if (localStorage.getItem("Native")) {
        PRONATIVE();
    } else {
        PROLIVE();
    };
    PROJECTCONNECTOR();
};

const PRONATIVE=()=>{
const DATA=`const ADD = ${ADD};
const ANCHOR = ${ANCHOR};
const AUDIO = ${AUDIO};
const BODIER = ${BODIER};
const BREAK = ${BREAK};
const COLOR = ${COLOR};
const CONDITION = ${CONDITION};
const COPY = ${COPY};
const DEJSONIFICATION = ${DEJSONIFICATION};
const DISPLAY = ${DISPLAY};
const DIV = ${DIV};
const FETCH = ${FETCH};
const GETINDEX = ${GETINDEX};
const HEADER = ${HEADER};
const HEADERFIVE = ${HEADERFIVE};
const HEADERFOUR = ${HEADERFOUR};
const HEADERSIX = ${HEADERSIX};
const HEADERTHREE = ${HEADERTHREE};
const HEADERTWO = ${HEADERTWO};
const IFRAME = ${IFRAME};
const JSONADDER = ${JSONADDER};
const JSONIFICATION = ${JSONIFICATION};
const JSONREMOVER = ${JSONREMOVER};
const LOCALCLEAR = ${LOCALCLEAR};
const LOCALDELETE = ${LOCALDELETE};
const LOCALSTORE = ${LOCALSTORE};
const PARAGRAPH = ${PARAGRAPH};
const PROTECT = ${PROTECT};
const REDUX = ${REDUX};
const ROUTE = ${ROUTE};
const SESSIONCLEAR = ${SESSIONCLEAR};
const SESSIONDELETE = ${SESSIONDELETE};
const SESSIONSTORE = ${SESSIONSTORE};
const STOREINDEX = ${STOREINDEX};
const TEXTAREA = ${TEXTAREA};
const VIDEO = ${VIDEO};
const ZOOM = ${ZOOM};         
`;
localStorage.setItem("CLOUDNATIVE",DATA);
};

const PROLIVE=()=>{
    window.ADD = ADD;
    window.ANCHOR = ANCHOR;
    window.AUDIO = AUDIO;
    window.BODIER = BODIER;
    window.BREAK = BREAK;
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
};

DATAPROCESS();