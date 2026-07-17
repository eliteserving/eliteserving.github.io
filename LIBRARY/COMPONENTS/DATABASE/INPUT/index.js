export const INPUT=(HOLDER,TYPES,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"input",(DATA)=>{
        WIDTH(DATA,"90%");
        HEIGHT(DATA,"32px");
        BORDERRADIUS(DATA,"5px");
        OUTLINE(DATA);
        TYPE(DATA,TYPES||"text");
        COMPOMODE(DATA);
        TEXTCOMPOMODE(DATA);
        PLACEHOLDER(DATA,TEXT||"Enter Your Text");
        CALLBACk(DATA);
    });
};