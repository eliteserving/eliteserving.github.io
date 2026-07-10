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
  };
  if (window.matchMedia("(display-mode: standalone)").matches ||window.navigator.standalone === true) {
    localStorage.setItem("app-installed", "true");
    return true;
  };
  if (!document.querySelector('link[rel="manifest"]')) {
    const appName = document.title;
    const manifest = {
      name: appName,
      short_name: appName,
      start_url: location.origin + location.pathname,
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      icons: [
        {
          src: "./logo.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    };
    const manifestBlob = new Blob([JSON.stringify(manifest)],{
        type: "application/manifest+json"
      }
    );
    const manifestURL = URL.createObjectURL(manifestBlob);
    const manifestLink = document.createElement("link");
    manifestLink.rel = "manifest";
    manifestLink.href = manifestURL;
    document.head.appendChild(manifestLink);
  };
  if ("serviceWorker" in navigator && !INSTALLABLE.swReady) {
    const swCode = `
      self.addEventListener("install", e => {
        self.skipWaiting();
      });
      self.addEventListener("activate", e => {
        self.clients.claim();
      });
      self.addEventListener("fetch", e => {});
    `;
    const swBlob = new Blob([swCode],{
        type: "application/javascript"
      }
    );
    const swURL = URL.createObjectURL(swBlob);
    try {
      await navigator.serviceWorker.register(swURL);
      INSTALLABLE.swReady = true;
    } catch(e) {
      console.log("Service worker failed", e);
    };
  };
  if (!INSTALLABLE.started) {
    INSTALLABLE.started = true;
    INSTALLABLE.prompt = null;
    window.addEventListener("beforeinstallprompt",e => {
        e.preventDefault();
        INSTALLABLE.prompt = e;
      }
    );
    window.addEventListener("appinstalled",() => {
        localStorage.setItem(
          "app-installed",
          "true"
        );
        INSTALLABLE.prompt = null;
      }
    );
  };
  if (!INSTALLABLE.prompt) {
    console.log("Install not available yet");
    return false;
  };
  INSTALLABLE.prompt.prompt();
  const result =await INSTALLABLE.prompt.userChoice;
  if (result.outcome === "accepted") {
    localStorage.setItem("app-installed","true");
    return true;
  }
  return false;
};
if (localStorage.getItem("ENV") === "WEB" ) {
    INSTALLABLE();
}; 
if (TITLE === "EliteBuilder"||STATUS) {
    RUNNER();
} else {
    UPDATES();
};