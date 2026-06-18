const MOBILEVIEW=()=>{

    CLEAR("");

    HEAD("",(DATA)=>{

        POSITION(DATA,"absolute");

        LEFT(DATA,"");

        BACKGROUND(DATA,"red");
    
        ICONS(DATA,BLACKMENUICON,WHITESEARCHICON,()=>{
    
        });
    
        HEADER(DATA,"Fiskon",()=>{
    
        });
    
        ICONS(DATA,WHITESHOPPINGCART,WHITEUSERICON,()=>{
    
        });
    
    });


  
};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});