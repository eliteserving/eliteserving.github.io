const LINK="https://eliteserving.github.io/LIBRARY/DEMO/Data.json";

const MOBILEVIEW=()=>{

    CLEAR("");

    VIEWS("",(HOLDER)=>{

        HEIGHT(HOLDER,"");

        HEAD(HOLDER,(DATA)=>{
    
            ICONS(DATA,BLACKMENUICON,WHITEMENUICON,()=>{
    
            });
    
            HEADER(DATA,"NCOO",()=>{
    
            });
    
            ICONS(DATA,BLACKUSERICON,WHITEUSERICON,()=>{
    
            });
    
            ICONS(DATA,WHITESHOPPINGCART,WHITESHOPPINGCART,()=>{
    
            });
    
        });
    
        INLINEVIEW(HOLDER,(DATA)=>{
    
            HEIGHT(DATA,"auto");
    
            FETCH(LINK,"",(Data)=>{
    
                CLEAR(DATA);
    
                REDUX(Data,(Info)=>{
    
                    VIEWS(DATA,(DATATED)=>{
    
                        OVERFLOW(DATATED,"hidden");
                        FLEXSHRINK(DATATED);
                        MARGIN(DATATED,"5%");
                        WIDTH(DATATED,"80px");
                        HEIGHT(DATATED,"80px");
                        BORDERRADIUS(DATATED,"50px");
                        BACKGROUND(DATATED,"blue");
                        BORDER(DATATED,"white");
    
                    });
    
                });
    
            });
    
        });
    
        VIEWS(HOLDER,(DATA)=>{
    
            WIDTH(DATA,"98%");
            BORDER(DATA,"#FFFFFF10");
            HEIGHT(DATA,"auto");
    
            HEADER(DATA,"Quick Donation",(DATATED)=>{
    
                MARGIN(DATATED,"5%");
    
            });
    
            INLINEVIEW(DATA,(DATATED)=>{
    
                HEIGHT(DATATED,'80px');
    
                BUTTON(DATATED,"Zakat",(DATATID)=>{
    
                    MARGIN(DATATID,"");
                    WIDTH(DATATID,"35%");
    
                });
    
                INPUT(DATATED,"tel","Enter Amount",(DATATID)=>{
    
                    MARGIN(DATATID,"");
                    HEIGHT(DATATID,"50px");
                    WIDTH(DATATID,"53%");
    
                });
    
            });
    
            BUTTON(DATA,"Donate Now",(DATATID)=>{
    
                MARGIN(DATATID,"2%");
    
                BACKGROUND(DATATID,"forestgreen");
    
                COLOR(DATATID,"WHITE");
    
            });
    
        });
    
        INLINEVIEW(HOLDER,(DATA)=>{
    
            HEIGHT(DATA,"70%");
            BORDER(DATA,"#FFFFFF10");

            VIEWS(DATA,(DATATED)=>{
    
                OVERFLOW(DATATED,"hidden");
                FLEXSHRINK(DATATED);
                MARGIN(DATATED,"2%");
                WIDTH(DATATED,"95%");
                HEIGHT(DATATED,"95%");
                BORDERRADIUS(DATATED,"5px");
                BACKGROUND(DATATED,"blue");
                BORDER(DATATED,"white");
    
            });

            VIEWS(DATA,(DATATED)=>{
    
                OVERFLOW(DATATED,"hidden");
                FLEXSHRINK(DATATED);
                MARGIN(DATATED,"2%");
                WIDTH(DATATED,"95%");
                HEIGHT(DATATED,"95%");
                BORDERRADIUS(DATATED,"5px");
                BACKGROUND(DATATED,"blue");
                BORDER(DATATED,"white");
    
            });

            VIEWS(DATA,(DATATED)=>{
    
                OVERFLOW(DATATED,"hidden");
                FLEXSHRINK(DATATED);
                MARGIN(DATATED,"2%");
                WIDTH(DATATED,"95%");
                HEIGHT(DATATED,"95%");
                BORDERRADIUS(DATATED,"5px");
                BACKGROUND(DATATED,"blue");
                BORDER(DATATED,"white");
    
            });
    
        });

    });

};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});