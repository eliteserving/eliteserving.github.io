let SALIMUDATABASELINK;
if (localStorage.getItem("Native")) {
    SALIMUDATABASELINK = "''";
} else {
    SALIMUDATABASELINK = "";
};
export { SALIMUDATABASELINK };