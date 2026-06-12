let PAYTOTAAPI;
if (localStorage.getItem("Native")) {
    PAYTOTAAPI = "'https://script.google.com/macros/s/AKfycbz6oR6HzIgJjpH37czfhy1pOfkAPJgzVYKpFf2z7cfuCh8Ohva8HZ8qEtq6oVDLouNB/exec'";
} else {
    PAYTOTAAPI = "https://script.google.com/macros/s/AKfycbz6oR6HzIgJjpH37czfhy1pOfkAPJgzVYKpFf2z7cfuCh8Ohva8HZ8qEtq6oVDLouNB/exec";
};
export { PAYTOTAAPI };