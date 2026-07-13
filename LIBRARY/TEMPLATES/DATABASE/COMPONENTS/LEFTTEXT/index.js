export const LEFTTEXT=(HOLDER,TEXT,CALLBACK)=>{
    PARAGRAPH(HOLDER,TEXT,(DATA)=>{
        MARGIN(DATA,"auto");
        MARGINLEFT(DATA,"2%");
        LEFTTEXTALIGN(DATA); 
        CALLBACK(DATA);
    });
};