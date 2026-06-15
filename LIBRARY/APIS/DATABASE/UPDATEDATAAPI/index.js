let UPDATEDATAAPI;
if (localStorage.getItem("Native")) {
    UPDATEDATAAPI = "'https://script.google.com/macros/s/AKfycbw3858uzS6q7u09AYz5CNxqhVLirNDZvcgbPGpK-vK080jCHrZTFgdrd4PvMszAEb-RaA/exec'";
} else {
    UPDATEDATAAPI = "https://script.google.com/macros/s/AKfycbw3858uzS6q7u09AYz5CNxqhVLirNDZvcgbPGpK-vK080jCHrZTFgdrd4PvMszAEb-RaA/exec";
};
export { UPDATEDATAAPI };