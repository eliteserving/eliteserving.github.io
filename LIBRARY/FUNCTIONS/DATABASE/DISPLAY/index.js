export const DISPLAY=(HOLDER,DATA)=>{
    const BODIER=document.querySelector("body");
    CONDITION(HOLDER,()=>{
        HOLDER.innerHTML=DATA;
    },()=>{
        BODIER.innerHTML=DATA;
    });
};