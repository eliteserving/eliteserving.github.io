let COMPANYDATABASELINK;
if (localStorage.getItem("Native")) {
    COMPANYDATABASELINK = "''";
} else {
    COMPANYDATABASELINK = "";
};
export { COMPANYDATABASELINK };