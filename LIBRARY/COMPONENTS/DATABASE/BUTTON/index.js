export const BUTTON=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"button",(DATA)=>{
        MARGIN(DATA,"");
        WIDTH(DATA,"auto");
        HEIGHT(DATA,"50px");
        BORDERRADIUS(DATA,"5px");
        OUTLINE(DATA);
        DISPLAY(DATA,TEXT||"Click");
        FONTSIZE(DATA,"80%");
        CALLBACk(DATA);
        CONDITION(sessionStorage.getItem("theme") === "dark",()=>{
            COLOR(DATA,"white");
        },()=>{
            COLOR(DATA,"black");
        });
    });
};