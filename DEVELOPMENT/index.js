const MOBILEVIEW=()=>{

    CLEAR("");

    HEAD("",(DATA)=>{

        ICONS(DATA,BLACKMENUICON,WHITEMENUICON,()=>{

        });

        HEADER(DATA,"NCOO",()=>{

        });

        ICONS(DATA,BLACKUSERICON,WHITEUSERICON,()=>{

        });

        ICONS(DATA,WHITESHOPPINGCART,WHITESHOPPINGCART,()=>{

        });

    });

    
};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER(DATA,"NCOR",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});