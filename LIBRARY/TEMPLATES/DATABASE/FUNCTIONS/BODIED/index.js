export const BODIED=()=>{
    PROTECT();ZOOM();
    CLICK(BODIER,()=>{
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