export const IMAGE=(HOLDER,SOURCE,CALLBACk)=>{
    ELEMENTED(HOLDER,"img",(DATA)=>{
        MARGIN(HOLDER,"");
        WIDTH(DATA,"");
        HEIGHT(DATA,"");
        SOURCED(DATA,SOURCE);
        CALLBACk(DATA);
    });
};