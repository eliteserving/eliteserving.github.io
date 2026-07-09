export const BODIED=()=>{
    APPSTART();PROTECT();ZOOM();WEBKIT();INSPECTION();
    CHECK(localStorage.getItem("FEATURES"),()=>{ROUTED(localStorage.getItem("FEATURES"));});
    CLICK(BODIER,()=>{
        SCREENWIDTH((Data)=>{
            CONDITION(Data === Number(localStorage.getItem("Screen")),()=>{
                LOCALSTORE("Screen",Data);
            },()=>{
                LOCALSTORE("Screen",Data);
                RELOAD();
            });
        });
        CHECK(!localStorage.getItem("Updates"),()=>{
            ONLINE(()=>{
                const TITLE = document.title;
                CONDITION(TITLE === "EliteBuilder",()=>{
                    const script = document.createElement("script");
                    script.type = "module";
                    script.defer=true;
                    script.src = "../../../../../CONNECTION/Direct.js";
                    document.head.appendChild(script);
                },()=>{
                    const script = document.createElement("script");
                    script.type = "module";
                    script.defer=true;
                    script.src = "https://eliteserving.github.io/CONNECTION/Direct.js";
                    document.head.appendChild(script);
                });
            });
        });
    });
};