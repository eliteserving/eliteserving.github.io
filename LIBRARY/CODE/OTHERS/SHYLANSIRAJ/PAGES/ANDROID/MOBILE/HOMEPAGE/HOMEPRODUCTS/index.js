export const SHYRAJANDROIDHOMEPRODUCTS=()=>{
    DEJSONIFICATION(sessionStorage.getItem("StoredData"),(SDATA)=>{
        HEADERVIEWSPAGE((HOLDER)=>{
            LEFTICON(HOLDER,WHITEBACKICON,BLACKBACKICON,(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE("",SHYLANSIRAJANDROIDHOMEPAGE,SHYLANSIRAJANDROIDHOMEPAGE);
                });
            });
            HEADER(HOLDER,SDATA.NAME,(DATA)=>{
                MARGINRIGHT(DATA,"1%");
            });
        },(HOLDER)=>{
    
        });
    });
};