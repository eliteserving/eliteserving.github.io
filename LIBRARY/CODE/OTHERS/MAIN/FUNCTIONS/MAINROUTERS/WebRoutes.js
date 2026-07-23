export const WEBROUTES=()=>{
    const MOBILEVIEW=()=>{
        const LOADDATA={
            payment: () => {MAINPAYMENT();}
        };
        LINKTRACKER(LOADDATA,()=>{
            WEBMOBILEMAINHOMEPAGE();
        });
    };
    const DESKTOPVIEW=()=>{
        const LOADDATA={
            payment: () => {MAINPAYMENT();}
        };
        LINKTRACKER(LOADDATA,()=>{
            WEBDESKTOPMAINHOMEPAGE();
        }); 
    };
    VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});
};