import { SHYLANSIRAJPROFILEPAGE } from "../SHYLANSIRAJ/PAGES/PROFILEPAGE/index.js";

export const PROJECT=()=>{
if (localStorage.getItem("Updates")) {

const DATA=`const SHYLANSIRAJPROFILEPAGE=${SHYLANSIRAJPROFILEPAGE};

`;

localStorage.setItem("FEATURES",DATA);
        
} else {

    window.SHYLANSIRAJPROFILEPAGE=SHYLANSIRAJPROFILEPAGE;
        
};

};