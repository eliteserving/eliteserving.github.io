import { MAIN } from "./JS/PROJECTS/MAIN/index.js";
import { PAYMENTS } from "./JS/PROJECTS/PAYMENTS/Payment.js";


window.PAYMENTS=PAYMENTS;
window.MAIN=MAIN;

const PRO=localStorage.getItem("Project");

switch (PRO) {
    case "PAYMENT":PAYMENTS();
        break;
    case "MAIN":MAIN();
        break;
    default:PAYMENTS();
        break;
};