const STATUS="Active";
const TITLE = document.title;
const REJECTED="EliteBuilder";
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
async function INSTALLABLE() {
  if (localStorage.getItem("app-installed") === "true") {
    return true;
  }
  if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  ) {
    localStorage.setItem("app-installed", "true");
    return true;
  }
  if (!document.querySelector('link[rel="manifest"]')) {
    const title = document.title || "App";
    const favicon =document.querySelector('link[rel="icon"]')?.href ||document.querySelector('link[rel="shortcut icon"]')?.href ||"/favicon.ico";
    const manifest = {
      name: title,
      short_name: title,
      start_url: "./",
      scope: "./",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      icons: [
        {
          src: favicon,
          sizes: "512x512",
          type: "image/png"
        }
      ]
    };
    const blob = new Blob([JSON.stringify(manifest)],{ type: "application/manifest+json" });
    const manifestURL = URL.createObjectURL(blob);
    const link = document.createElement("link");
    link.rel = "manifest";
    link.href = manifestURL;
    document.head.appendChild(link);
  }
  if (!INSTALLABLE.initialized) {
    INSTALLABLE.initialized = true;
    INSTALLABLE.deferredPrompt = null;
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      INSTALLABLE.deferredPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      localStorage.setItem("app-installed", "true");
      INSTALLABLE.deferredPrompt = null;
    });
  }
  if (!INSTALLABLE.deferredPrompt) {
    return false;
  }
  INSTALLABLE.deferredPrompt.prompt();
  const { outcome } = await INSTALLABLE.deferredPrompt.userChoice;
  if (outcome === "accepted") {
    localStorage.setItem("app-installed", "true");
    INSTALLABLE.deferredPrompt = null;
    return true;
  }
  return false;
}
if (localStorage.getItem("ENV") === "WEB" ) {
    await INSTALLABLE();
}; 
if (TITLE === "EliteBuilder"||STATUS) {
    RUNNER();
} else {
    UPDATES();
};