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

        CLEAR(DATA);

        GETSMS((DATATA)=>{

            INLINEVIEW(DATA,(DATATAS)=>{

                WIDTH(DATATAS,"90%");
                BORDERRADIUS(DATATAS,"5px");
                BACKGROUND(DATATAS,"green");
                MARGIN(DATATAS,"2%");

                HEADER(DATATAS,DATATA.sender,(NAME)=>{

                    POSITION(NAME,"absolute");

                    MARGINTOP(NAME,"2%");

                });

                HEADER(DATATAS,DATATA.message,(NAME)=>{

                    MARGINLEFT(NAME,"2%");
                    
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