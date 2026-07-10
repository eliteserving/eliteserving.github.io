export const HEAD=(HOLDER,CALLBACk)=>{
    ELEMENTED(HOLDER,"header",(DATA)=>{
        POSITION(DATA,"absolute");
        TOP(DATA,"0");
        LEFT(DATA,"");
        WIDTH(DATA,"100%");
        HEIGHT(DATA,"50px");
        OVERFLOWY(DATA,"hidden");
        DISPLAYED(DATA,"inline-flex");
        CALLBACk(DATA);
    });
};