const MOBILEVIEW=()=>{

    CLEAR("");

    HEAD("",(DATA)=>{
    
        ICONS(DATA,BLACKMENUICON,WHITESEARCHICON,()=>{
    
        });
    
        HEADER(DATA,"Fiskon",()=>{
    
        });
    
        ICONS(DATA,WHITESHOPPINGCART,WHITEUSERICON,()=>{
    
        });
    
    });

    FOOTER("",(DATA)=>{

        HEADER(DATA,"All",()=>{
    
        });

        HEADER(DATA,"Unsynced",()=>{
    
        });

        HEADER(DATA,"Synced",()=>{
    
        });

    });

};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});