export const SHYRAJCLOTHESAPI=()=>{
    GETDATA(SHYRAJDATABASEMAINAPI,"SHYLANSIRAJFASHIONHUB",(Data)=>{
        const DATA={
            "name":"CLOTHES",
            "Data":Data
        };
        STOREINDEX ("CLOTHES","CLOTHES",DATA,()=>{
        });
    });
};