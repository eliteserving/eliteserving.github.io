export const HEADERTWO=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h2",(DATA)=>{
        DISPLAY(DATA,TEXT||"Your Text");
        MARGIN(DATA,"");
        CALLBACk(DATA);
    });
};