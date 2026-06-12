let UPDATEDATAAPI;
if (localStorage.getItem("Native")) {
    UPDATEDATAAPI = "'https://script.google.com/macros/s/AKfycbzvvcxO9JzBkeUaIG_2psFnOLaP6SdvB44RYUAELm7fHZT4Ooz_AJ9f1IIxRovDj6LJ/exec'";
} else {
    UPDATEDATAAPI = "https://script.google.com/macros/s/AKfycbzvvcxO9JzBkeUaIG_2psFnOLaP6SdvB44RYUAELm7fHZT4Ooz_AJ9f1IIxRovDj6LJ/exec";
};
export { UPDATEDATAAPI };