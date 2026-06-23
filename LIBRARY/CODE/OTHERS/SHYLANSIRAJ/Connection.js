import { SHYLANSIRAJPROFILEPAGE } from "./PAGES/PROFILEPAGE/index.js";

if (localStorage.getItem("Updates")) {

const DATA=`const SHYLANSIRAJPROFILEPAGE=${SHYLANSIRAJPROFILEPAGE};

`;

localStorage.setItem("FEATURES",DATA);
        
} else {

    window.SHYLANSIRAJPROFILEPAGE=SHYLANSIRAJPROFILEPAGE;
        
};