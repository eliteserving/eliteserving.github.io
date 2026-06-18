let ELITEDATABASELINK;
if (localStorage.getItem("Native")) {
    ELITEDATABASELINK = "''";
} else {
    ELITEDATABASELINK = "";
};
export { ELITEDATABASELINK };