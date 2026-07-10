export const HEADERTHREE=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h3",(DATA)=>{
        DISPLAY(DATA,TEXT||"Your Text");
        FONTSIZE(DATA,"80%");
        CALLBACk(DATA);
    });
};