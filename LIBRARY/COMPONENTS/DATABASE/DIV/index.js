export const DIV=(HOLDER,CALLBACk)=>{
    ELEMENTED(HOLDER,"div",(DATA)=>{
        COMPONENTMODE(DATA);
        MARGIN(DATA,"");
        WIDTH(DATA,"100%");
        HEIGHT(DATA,"100px");
        DISPLAYED(DATA,"block");
        DISPLAY(DATA,"");
        CALLBACk(DATA);
    });
};