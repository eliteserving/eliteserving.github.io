export const HEADERFOUR=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h4",(DATA)=>{
        DISPLAY(DATA,TEXT||"Your Text");
        FONTSIZE(DATA,"80%");
        CALLBACk(DATA);
    });
};