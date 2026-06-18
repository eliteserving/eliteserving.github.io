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

            VIEWS(DATA,(DATED)=>{

                BACKGROUND(DATED,"forestgreen");
                WIDTH(DATED,"95%");
                HEIGHT(DATED,"auto");
                MARGIN(DATED,"2%");
                BORDERRADIUS(DATED,"5px");

                HEAD(DATED,(DATAS)=>{

                    POSITION(DATAS,"relative");
                    BACKGROUND(DATAS,"teal");

                    HEADER(DATAS,DATATA.sender,()=>{
    
                    });

                });

                INLINEVIEW(DATED,(DATEDS)=>{

                    HEADER(DATEDS,DATATA.message,(MESSAGE)=>{

                        MARGINLEFT(MESSAGE,"2%");
                        
                    });

                });

                INLINEVIEW(DATED,(DATEDS)=>{

                    BACKGROUND(DATEDS,"gray");
                    HEIGHT(DATEDS,"70px");

                    BUTTON(DATEDS,"Sync",(DT)=>{

                        WIDTH(DT,"45%");
                        MARGIN(DT,"2%");
                        BACKGROUND(DT,"brown");
                        COLOR(DT,"white");

                    });

                    BUTTON(DATEDS,"Status",(DT)=>{

                        WIDTH(DT,"45%");
                        MARGIN(DT,"2%");
                        BACKGROUND(DT,"orange");
                        COLOR(DT,"white");

                    });

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