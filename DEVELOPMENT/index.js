const MOBILEVIEW=()=>{

    HEAD("",(DATA)=>{

        BACKGROUND(DATA,"red");

        LEFTICON(DATA,)

        HEADER(DATA,"Elite RObust Ontology",()=>{

        });

    })


};

const DESKTOPVIEW=()=>{

    HEADER("","DESKTOP",()=>{

    });

};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});