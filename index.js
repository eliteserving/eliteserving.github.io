const STATUS="Active";
const TITLE = document.title;
const RUNNER=()=>{
    if (localStorage.getItem("Native")) {
        if (TITLE === "EliteBuilder" ) {
            const script = document.createElement("script");
            script.type = "module";
            script.defer=true;
            script.src = "./CONNECTION/Direct.js";
            document.head.appendChild(script);
        } else {
            const script = document.createElement("script");
            script.type = "module";
            script.defer=true;
            script.src = "https://eliteserving.github.io/CONNECTION/Direct.js";
            document.head.appendChild(script);
        };
    } else {
        if (TITLE === "EliteBuilder" ) {
            const script = document.createElement("script");
            script.type = "module";
            script.defer=true;
            script.src = "./CONNECTION/Live.js";
            document.head.appendChild(script);
        } else {
            const script = document.createElement("script");
            script.type = "module";
            script.defer=true;
            script.src = "https://eliteserving.github.io/CONNECTION/Live.js";
            document.head.appendChild(script);
        };
    };
};
const UPDATES=()=>{
    let Env;
    if (localStorage.getItem("ENV") === "ANDROID" ) {
        Env="Mobile Application";
    } else {
        if (localStorage.getItem("ENV") === "DESKTOP") {
            Env="Desktop Application";  
        } else {
            Env="Website";
        };
    };
    let Date="08th July Of 2026";
    const Body=document.querySelector("body");
    Body.innerHTML=`
        <br>
        <h1 style="color:brown">ATTENTION</h1>
        <br>
        <h2>${TITLE} Users:</h2>
        <br>
        <p>This is a Public Announcement That The Services of This ${Env||"Website"} are Temporarily Off Line Undergoing Maintaince and Updates.</p>
        <br>
        <h1 style="color:teal" >APOLOGIES</h1>
        <br>
        <p>We are Sorry For Any Inconviences Caused.</p>
        <br>
        <h1 style="color:orange" >EXPECTATIONS</h1>
        <br>
        <p>The ${Env},Will Be Back Online On <br> <br> <b style="color:forestgreen">${Date}.</b></p>
        <br>
        <h1>Elite Robust Ontology</h1>
        <h2>Development Team </h2>
        <p>All Rights Reserved.</p>
        <br>
        <a href="mailto:eliterobustontology@gmail.com">Contact Us</a>
        <br><br><br>
    `;
};
if (STATUS === "Active" ) {
    RUNNER();
} else {
    UPDATES();
};