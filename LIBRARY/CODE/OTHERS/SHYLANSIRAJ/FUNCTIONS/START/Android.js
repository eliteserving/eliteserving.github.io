export const SHYLANSIRAJANDROIDSTARTPAGE=()=>{
    CONDITION(localStorage.getItem("Welcome"),()=>{
        ROUTE("",MOBILEVIEW,"MOBILEVIEW");
    },()=>{
        ROUTE("",SHYLANSIRAJANDROIDHOMEPAGE,"MOBILEVIEW");
    });
};