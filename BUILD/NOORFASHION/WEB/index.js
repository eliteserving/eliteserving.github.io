const LINK="https://docs.google.com/spreadsheets/d/1D7Km39gogTyE1i991NJ9E0jxYBzlhga2vuDpHv4rNk8/edit?usp=sharing";

const MOBILEVIEW=()=>{

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
    
    });
  
};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});