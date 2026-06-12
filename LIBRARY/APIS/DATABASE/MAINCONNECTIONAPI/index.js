let MAINCONNECTIONAPI;
if (localStorage.getItem("Native")) {
    MAINCONNECTIONAPI = "'https://docs.google.com/spreadsheets/d/1MNdU8d_brfzTPfNlhkxjV5Viu_Zjh826TGeog36gLi4/edit?usp=sharing'";
} else {
    MAINCONNECTIONAPI = "https://docs.google.com/spreadsheets/d/1MNdU8d_brfzTPfNlhkxjV5Viu_Zjh826TGeog36gLi4/edit?usp=sharing";
};
export { MAINCONNECTIONAPI };