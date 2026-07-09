import { PAYMENTS } from "./JS/PROJECTS/PAYMENTS/Payment.js";


window.PAYMENTS=PAYMENTS;

const PRO=localStorage.getItem("Project");

switch (PRO) {
    case "PAYMENT":PAYMENTS();
        break;
    default:PAYMENTS();
        break;
};