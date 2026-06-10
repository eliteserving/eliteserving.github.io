const LINK="https://eliteserving.github.io/LIBRARY/DEMO/Data.json";

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

    INLINEVIEW("",(DATA)=>{

        FETCH(LINK,"",(Data)=>{

            REDUX(Data,(Info)=>{

                DIV(DATA,(DATATED)=>{

                    WIDTH(DATATED,"80px");
                    HEIGHT(DATATED,"80%");
                    BORDERRADIUS(DATATED,"50px");
                    BACKGROUND(DATATED,"blue");
                    BORDER(DATATED,"white");

                });

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