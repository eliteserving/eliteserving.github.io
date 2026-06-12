let INSERTDATAAPI;
if (localStorage.getItem("Native")) {
    INSERTDATAAPI = "'https://script.google.com/macros/s/AKfycbzquxwoweLxulSRE0D9eEYcdCtrDR79kaUuRU5uwXrctdPSGFRlRtg_mbYyOviM1os/exec'";
} else {
    INSERTDATAAPI = "https://script.google.com/macros/s/AKfycbzquxwoweLxulSRE0D9eEYcdCtrDR79kaUuRU5uwXrctdPSGFRlRtg_mbYyOviM1os/exec";
};
export { INSERTDATAAPI };