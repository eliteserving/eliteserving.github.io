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

            JSONIFICATION(DATATA,(Data)=>{

                REDUX(Data,(Daata)=>{

                    DISPLAY(DATA,Daata);
                
                });

            });

        });

    });

    FOOTER("",(DATA)=>{

        HEADER(DATA,"All",()=>{
    
        });

        HEADER(DATA,"UnResolved",()=>{
    
        });

        HEADER(DATA,"Sync",()=>{
    
        });

    });

};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});