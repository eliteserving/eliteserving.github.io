const MOBILEVIEW=()=>{

    CLEAR("");

    HEAD("",(HOLDER)=>{

        LEFTICON(HOLDER,ELITELOGO,ELITELOGO,(DATA)=>{

            BORDERRADIUS(DATA,"100%");
            WIDTH(DATA,"40px");
            HEIGHT(DATA,"40px");

        });

        HEADER(HOLDER,"Elite RObust Ontology",()=>{

        });

        LEFTICON(HOLDER,WHITEMENUICON,BLACKMENUICON,(DATA)=>{

        });

    });

};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","DESKTOP",()=>{

    });

};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});