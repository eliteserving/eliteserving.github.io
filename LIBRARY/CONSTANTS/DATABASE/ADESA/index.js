let ADESADATABASELINK;
if (localStorage.getItem("Native")) {
    ADESADATABASELINK = "''";
} else {
    ADESADATABASELINK = "";
};
export { ADESADATABASELINK };