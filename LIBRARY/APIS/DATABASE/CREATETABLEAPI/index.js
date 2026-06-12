let CREATETABLEAPI;
if (localStorage.getItem("Native")) {
    CREATEDATABASELINK = "'https://script.google.com/macros/s/AKfycbxpkdp6aISoCAW0gSdhdk1AcqpS25lu18c31a_vDT5jRfDR9Yt0g1bQB_aZGVkbXGh7/exec'";
} else {
    CREATEDATABASELINK = "https://script.google.com/macros/s/AKfycbxpkdp6aISoCAW0gSdhdk1AcqpS25lu18c31a_vDT5jRfDR9Yt0g1bQB_aZGVkbXGh7/exec";
};
export { CREATEDATABASELINK };