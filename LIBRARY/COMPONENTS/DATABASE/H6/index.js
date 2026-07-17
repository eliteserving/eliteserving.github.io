export const HEADERSIX=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h6",(DATA)=>{
        TEXTCOMPOMODE(DATA);
        DISPLAY(DATA,TEXT||"Your Text");
        FONTSIZE(DATA,"80%");
        CALLBACk(DATA);
    });
};