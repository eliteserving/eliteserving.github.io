let MJOMBALIDATABASELINK;
if (localStorage.getItem("Native")) {
    MJOMBALIDATABASELINK = "''";
} else {
    MJOMBALIDATABASELINK = "";
};
export { MJOMBALIDATABASELINK };