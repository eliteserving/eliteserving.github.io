const MOBILEVIEW=()=>{

    CLEAR("");

    HEAD("",(DATA)=>{
    
        LEFTICON(DATA,BLACKMENUICON,WHITESEARCHICON,()=>{
    
        });
    
        HEADER(DATA,"Fiskon",()=>{
    
        });
    
        RIGHTICON(DATA,WHITESHOPPINGCART,WHITEUSERICON,()=>{
    
        });
    
    });

    VIEWS("",(DATA)=>{

        POSITION(DATA,"absolute");
        TOP(DATA,"50px");
        HEIGHT(DATA,"auto");
        BOTTOM(DATA,"50px");

        GETSMS((DATATA)=>{

            JSONIIFICATION(DATATA,(Data)=>{
       
                DISPLAY(DATA,Data);

            });

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