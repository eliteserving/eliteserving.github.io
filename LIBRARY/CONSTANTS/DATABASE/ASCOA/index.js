let ASCOADATABASELINK;
if (localStorage.getItem("Native")) {
    ASCOADATABASELINK = "''";
} else {
    ASCOADATABASELINK = "";
};
export { ASCOADATABASELINK };