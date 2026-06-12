export const DIV=(HOLDER,CALLBACk)=>{
    ELEMENTED(HOLDER,"div",(DATA)=>{
        MARGIN(DATA,"");
        WIDTH(DATA,"100%");
        HEIGHT(DATA,"100px");
        DISPLAY(DATA,"");
        CALLBACk(DATA);
    });
};