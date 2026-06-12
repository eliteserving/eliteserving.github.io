export const HEADERTHREE=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h3",(DATA)=>{
        DISPLAY(DATA,TEXT||"Your Text");
        CALLBACk(DATA);
    });
};