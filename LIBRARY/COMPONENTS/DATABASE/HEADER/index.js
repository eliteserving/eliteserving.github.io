export const HEAD=(HOLDER,CALLBACk)=>{
    ELEMENTED(HOLDER,"header",(DATA)=>{
        WIDTH(DATA,"100%");
        HEIGHT(DATA,"50px");
        DISPLAYED(DATA,"inline-flex");
        CALLBACk(DATA);
    });
};