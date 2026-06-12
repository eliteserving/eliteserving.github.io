export const HEADERFOUR=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h4",(DATA)=>{
        DISPLAY(DATA,TEXT||"Your Text");
        CALLBACk(DATA);
    });
};