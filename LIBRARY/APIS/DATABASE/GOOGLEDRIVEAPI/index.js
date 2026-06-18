let GOOGLEDRIVEAPI;
if (localStorage.getItem("Native")) {
    GOOGLEDRIVEAPI = "'https://script.google.com/macros/s/AKfycbw3858uzS6q7u09AYz5CNxqhVLirNDZvcgbPGpK-vK080jCHrZTFgdrd4PvMszAEb-RaA/exec'";
} else {
    GOOGLEDRIVEAPI = "https://script.google.com/macros/s/AKfycbw3858uzS6q7u09AYz5CNxqhVLirNDZvcgbPGpK-vK080jCHrZTFgdrd4PvMszAEb-RaA/exec";
};
export { GOOGLEDRIVEAPI };