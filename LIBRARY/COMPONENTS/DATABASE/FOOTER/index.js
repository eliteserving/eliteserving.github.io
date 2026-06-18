export const FOOTER=(HOLDER,CALLBACk)=>{
    ELEMENTED(HOLDER,"footer",(DATA)=>{
       POSITION(DATA,"absolute");
        BOTTOM(DATA,"0");
        LEFT(DATA,"");
        WIDTH(DATA,"100%");
        HEIGHT(DATA,"50px");
        DISPLAYED(DATA,"inline-flex");
        CALLBACk(DATA);
    });
};