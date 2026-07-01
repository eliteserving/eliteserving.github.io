export const TABLEVIEW=(HOLDER,CALLBACK)=>{
    DIV(HOLDER,(DATA)=>{
        OVERFLOW(DATA,"hidden");
        OVERFLOWX(DATA,"");
        DISPLAYED(DATA,"inline-table");
        CALLBACK(DATA);
    });
};