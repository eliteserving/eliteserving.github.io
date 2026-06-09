export const HEADER=(HOLDER,TEXT,CALLBACk)=>{

    ELEMENTED(HOLDER,"h1",(DATA)=>{

        DISPLAY(DATA,TEXT||"Your Text");

        MARGIN(DATA,"auto");

        CALLBACk(DATA);

    });

};