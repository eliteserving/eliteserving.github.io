import {ANCHOR,AUDIO,BREAK,DIV,HEADER,HEADERTWO,HEADERTHREE,HEADERFOUR,HEADERFIVE,HEADERSIX,IFRAME,PARAGRAPH,TEXTAREA,VIDEO,BODIER,ADD,CAPITALIZED,CHECK,CLEARCACHE,CONDITION,COPY,DATENOW,DATETODAY,DEJSONIFICATION,DESPACEDWORDS,DEVICE,DISPLAY,ELEMENTED,FETCH,FILEPICKER,FINDER,FUNCTIONED,GETINDEX,GROUP,HIDER,INSPECTION,JSONADDER,JSONIFICATION,JSONREMOVER,LOCALCLEAR,LOCALDELETE,LOCALSTORE,LOCATOR,MONTHSTIME,OPERATINGSYSTEM,PARTISION,PROTECT,RANDOMCODE,REDUX,RELOAD,REPEATER,ROUTE,SCREENHEIGHT,SCREENWIDTH,SESSIONCLEAR,SESSIONDELETE,SESSIONSTORE,SOURCED,SOURCEREF,SPACEDWORDS,STORECACHE,STOREINDEX,STYLED,TEXTCHANGER,TIMEZONE,TYPE,WEBKIT,ZOOM,COLOR,APPMODE,BODIED,CLEAR,CLICK,ONLINE} from "../LIBRARY/CONNECTION.js";

const BUILDLINK="https://eliteserving.github.io/BUILD/"
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
            localStorage.setItem("Updates",new Date());
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
        localStorage.setItem("Updates",new Date());
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
        case "Cinefy":PROJECTLOADER("CINEFY");
            break;
        default:
            break;
    };
};

const DATA=`const ADD = ${ADD};
const ANCHOR = ${ANCHOR};
const APPMODE = ${APPMODE};
const AUDIO = ${AUDIO};
const BODIER = ${BODIER};
const BREAK = ${BREAK};
const CAPITALIZED = ${CAPITALIZED};
const CHECK = ${CHECK};
const CLEAR = ${CLEAR};
const CLEARCACHE = ${CLEARCACHE};
const CLICK = ${CLICK};
const COLOR = ${COLOR};
const CONDITION = ${CONDITION};
const COPY = ${COPY};
const DATENOW = ${DATENOW};
const DATETODAY = ${DATETODAY};
const DEJSONIFICATION = ${DEJSONIFICATION};
const DESPACEDWORDS = ${DESPACEDWORDS};
const DEVICE = ${DEVICE};
const DISPLAY = ${DISPLAY};
const DIV = ${DIV};
const ELEMENTED = ${ELEMENTED};
const FETCH = ${FETCH};
const FILEPICKER = ${FILEPICKER};
const FINDER = ${FINDER};
const FUNCTIONED = ${FUNCTIONED};
const GETINDEX = ${GETINDEX};
const GROUP = ${GROUP};
const HEADER = ${HEADER};
const HEADERFIVE = ${HEADERFIVE};
const HEADERFOUR = ${HEADERFOUR};
const HEADERSIX = ${HEADERSIX};
const HEADERTHREE = ${HEADERTHREE};
const HEADERTWO = ${HEADERTWO};
const HIDER = ${HIDER};
const IFRAME = ${IFRAME};
const INSPECTION = ${INSPECTION};
const JSONADDER = ${JSONADDER};
const JSONIFICATION = ${JSONIFICATION};
const JSONREMOVER = ${JSONREMOVER};
const LOCALCLEAR = ${LOCALCLEAR};
const LOCALDELETE = ${LOCALDELETE};
const LOCALSTORE = ${LOCALSTORE};
const LOCATOR = ${LOCATOR};
const MONTHSTIME = ${MONTHSTIME};
const ONLINE = ${ONLINE};
const OPERATINGSYSTEM = ${OPERATINGSYSTEM};
const PARAGRAPH = ${PARAGRAPH};
const PARTISION = ${PARTISION};
const PROTECT = ${PROTECT};
const RANDOMCODE = ${RANDOMCODE};
const REDUX = ${REDUX};
const RELOAD = ${RELOAD};
const REPEATER = ${REPEATER};
const ROUTE = ${ROUTE};
const SCREENHEIGHT = ${SCREENHEIGHT};
const SCREENWIDTH = ${SCREENWIDTH};
const SESSIONCLEAR = ${SESSIONCLEAR};
const SESSIONDELETE = ${SESSIONDELETE};
const SESSIONSTORE = ${SESSIONSTORE};
const SOURCED = ${SOURCED};
const SOURCEREF = ${SOURCEREF};
const SPACEDWORDS = ${SPACEDWORDS};
const STORECACHE = ${STORECACHE};
const STOREINDEX = ${STOREINDEX};
const STYLED = ${STYLED};
const TEXTAREA = ${TEXTAREA};
const TEXTCHANGER = ${TEXTCHANGER};
const TIMEZONE = ${TIMEZONE};
const TYPE = ${TYPE};
const VIDEO = ${VIDEO};
const WEBKIT = ${WEBKIT};
const ZOOM = ${ZOOM};

const BODIED = ${BODIED};
`;
localStorage.setItem("CLOUDNATIVE",DATA);

PROJECTCONNECTOR();