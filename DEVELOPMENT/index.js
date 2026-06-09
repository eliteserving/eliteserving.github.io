const MOBILEVIEW=()=>{

    CLEAR("");

    HEAD("",(DATA)=>{

        ICONS(DATA,BLACKMENUICON,WHITEMENUICON,()=>{

        })

        HEADER(DATA,"NCOR",()=>{

        });

    });

    
};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER(DATA,"NCOR",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});