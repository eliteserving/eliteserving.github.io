let CREATEDATABASEAPI;
if (localStorage.getItem("Native")) {
    CREATEDATABASEAPI = "'https://script.google.com/macros/s/AKfycbzWS54lvCL19LzS95PdgafYYN2nI0byOtdnIAzJXWHoVUuXSs7ni1rlAn48hAFJDXaa/exec'";
} else {
    CREATEDATABASEAPI = "https://script.google.com/macros/s/AKfycbzWS54lvCL19LzS95PdgafYYN2nI0byOtdnIAzJXWHoVUuXSs7ni1rlAn48hAFJDXaa/exec";
};
export { CREATEDATABASEAPI };