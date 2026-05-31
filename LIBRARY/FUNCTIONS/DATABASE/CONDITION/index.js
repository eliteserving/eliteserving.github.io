export const CONDITION=(TERM,CALLBACK,CALBACKTWO)=>{
    if (TERM) {
        CALBACK();
    } else {
        CALBACKTWO();
    };
};