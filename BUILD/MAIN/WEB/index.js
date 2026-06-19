const MOBILEVIEW=()=>{

    HEAD("",(HOLDER)=>{

        LEFTICON(HOLDER,ELITELOGO,ELITELOGO,(DATA)=>{

            WIDTH(DATA,"40px");
            HEIGHT(DATA,"40px");

        });

        HEADER(HOLDER,"Elite RObust Ontology",()=>{

        });

        LEFTICON(HOLDER,BLACKMENUICON,WHITEMENUICON,(DATA)=>{

        });

    });

};

const DESKTOPVIEW=()=>{

    HEADER("","DESKTOP",()=>{

    });

};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});