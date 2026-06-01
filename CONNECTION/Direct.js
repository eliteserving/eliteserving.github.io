import {ANCHOR,AUDIO,BREAK,DIV,HEADER,HEADERTWO,HEADERTHREE,HEADERFOUR,HEADERFIVE,HEADERSIX,IFRAME,PARAGRAPH,TEXTAREA,VIDEO,BODIER,ADD,CONDITION,COPY,DEJSONIFICATION,DISPLAY,FETCH,GETINDEX,JSONADDER,JSONIFICATION,JSONREMOVER,LOCALCLEAR,LOCALDELETE,LOCALSTORE,PROTECT,REDUX,ROUTE,SESSIONCLEAR,SESSIONDELETE,SESSIONSTORE,STOREINDEX,ZOOM,COLOR,APPMODE,BODIED,CLEAR} from "../LIBRARY/CONNECTION.js";

const BUILDLINK="https://webserving.github.io/BUILD/"
const PROJECTLOADER=(NAME)=>{
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
const DEVPROJECTLOADER=()=>{
    fetch("../DEVELOPMENT/index.js")
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

const DATA=`const ADD = ${ADD};
const ANCHOR = ${ANCHOR};
const APPMODE = ${APPMODE};
const AUDIO = ${AUDIO};
const BODIED = ${BODIED};
const BODIER = ${BODIER};
const BREAK = ${BREAK};
const CLEAR = ${CLEAR};
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

PROJECTCONNECTOR();