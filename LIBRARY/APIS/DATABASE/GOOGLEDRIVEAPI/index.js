let GOOGLEDRIVEAPI;
if (localStorage.getItem("Native")) {
    GOOGLEDRIVEAPI = "'https://script.google.com/macros/s/AKfycbz-z6Ii-ZqHeAF5Xl8PZoLHeBGK2a75AgkKXKmoEIAbnIX5T9G8GwUcPEmG4y1z6qFo/exec'";
} else {
    GOOGLEDRIVEAPI = "https://script.google.com/macros/s/AKfycbz-z6Ii-ZqHeAF5Xl8PZoLHeBGK2a75AgkKXKmoEIAbnIX5T9G8GwUcPEmG4y1z6qFo/exec";
};
export { GOOGLEDRIVEAPI };