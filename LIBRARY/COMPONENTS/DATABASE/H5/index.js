export const HEADERFIVE=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h5",(DATA)=>{
        DISPLAY(DATA,TEXT||"Your Text");
        CALLBACk(DATA);
    });
};