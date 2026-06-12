let PESAPALAPI;
if (localStorage.getItem("Native")) {
    PESAPALAPI = "'https://script.google.com/macros/s/AKfycbwclLNbb8ODNoTomzK2f8XSqJryPh3QINfFkrU0Of8Br3ZakNENhMedmJVyZR2F_5es/exec'";
} else {
    PESAPALAPI = "https://script.google.com/macros/s/AKfycbwclLNbb8ODNoTomzK2f8XSqJryPh3QINfFkrU0Of8Br3ZakNENhMedmJVyZR2F_5es/exec";
};
export { PESAPALAPI };