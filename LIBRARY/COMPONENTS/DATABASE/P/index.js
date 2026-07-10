export const PARAGRAPH=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h1",(DATA)=>{
        DISPLAY(DATA,TEXT||"Your Text");
        FONTSIZE(DATA,"95%");
        CALLBACk(DATA);
    });
};