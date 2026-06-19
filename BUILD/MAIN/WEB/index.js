const MOBILEVIEW=()=>{

    HEAD("",(DATA)=>{

        BACKGROUND(DATA,"red");

        HEADER(DATA,"Elite RObust Ontology",()=>{

        });

    });

};

const DESKTOPVIEW=()=>{

    HEADER("","DESKTOP",()=>{

    });

};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});