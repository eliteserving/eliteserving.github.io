const LINK="https://docs.google.com/spreadsheets/d/1D7Km39gogTyE1i991NJ9E0jxYBzlhga2vuDpHv4rNk8/edit?usp=sharing";

const MOBILEVIEW=()=>{

    CREATETABLE(MAINCONNECTIONAPI,"ARM",(DATA)=>{

        console.log(DATA)

    });

    CLEAR("");

    VIEWS("",(HOLDER)=>{

        HEIGHT(HOLDER,"");

        HEAD(HOLDER,(DATA)=>{
    
            ICONS(DATA,BLACKMENUICON,WHITEMENUICON,()=>{
    
            });
    
            HEADER(DATA,"ShylanSiraj Fashion Hub",()=>{
    
            });
    
            ICONS(DATA,WHITESHOPPINGCART,WHITESHOPPINGCART,()=>{
    
            });
    
        });

        INLINEVIEW(HOLDER,(DATA)=>{

            HEIGHT(DATA,"50px");

            BUTTON(DATA,"ALL",(DATATED)=>{

                MARGIN(DATATED,"");

                WIDTH(DATATED,"50px");

                HEIGHT(DATATED,"32px");
            
            });

            INLINEVIEW(DATA,(DATITED)=>{

                BACKGROUND(DATITED,"red");

                WIDTH(DATITED,"70%");

            });

        });

        VIEWS(HOLDER,(DATA)=>{

            HEIGHT(DATA,"");

            BACKGROUND(DATA,"Blue");

        });
    
    });
  
};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});