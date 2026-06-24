export const SHYLANSIRAJANDROIDSTARTPAGE=()=>{
    CONDITION(localStorage.getItem("Welcome"),()=>{
        ROUTE(" ",MOBILEHOMEPAGE,"MOBILEVIEW");
    },()=>{
        ROUTE(" ",SPLASHSCREEN,"MOBILEVIEW");
    });
};