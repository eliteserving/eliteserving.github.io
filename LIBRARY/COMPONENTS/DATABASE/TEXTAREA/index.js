export const TEXTAREA=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"textarea",(DATA)=>{
        PLACEHOLDER(DATA,TEXT||"Enter Your Text");
        CALLBACk(DATA);
    });
};