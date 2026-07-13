export const RIGHTTEXT=(HOLDER,TEXT,CALLBACK)=>{
    PARAGRAPH(HOLDER,TEXT,(DATA)=>{
        MARGIN(DATA,"auto");
        MARGINRIGHT(DATA,"2%");
        LEFTTEXTALIGN(DATA); 
        CALLBACK(DATA);
    });
};