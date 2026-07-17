export const TEXTAREA=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"textarea",(DATA)=>{
        COMPOMODE(DATA);
        TEXTCOMPOMODE(DATA);
        PLACEHOLDER(DATA,TEXT||"Enter Your Text");
        CALLBACk(DATA);
    });
};