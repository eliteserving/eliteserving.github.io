export const HEADERSIX=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h6",(DATA)=>{
        DISPLAY(DATA,TEXT||"Your Text");
        CALLBACk(DATA);
    });
};