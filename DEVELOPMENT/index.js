const LINK="https://docs.google.com/spreadsheets/d/1D7Km39gogTyE1i991NJ9E0jxYBzlhga2vuDpHv4rNk8/edit?usp=sharing";

const MOBILEVIEW=()=>{

    CLEAR("");

    CONDITION(localStorage.getItem("Welcome"),()=>{

        ROUTE(" ",MOBILEHOMEPAGE,"MOBILEVIEW");

    },()=>{

        ROUTE(" ",SPLASHSCREEN,"MOBILEVIEW");

    });

};

const SPLASHSCREEN=()=>{

    HEADER("","SHYLAN AND SIRAJ",(DATA)=>{

        MARGINTOP(DATA,"50%");
        STYLED(DATA,"font-size","30px");

    });

    HEADER("","FASHIONZ",(DATA)=>{

        MARGINTOP(DATA,"2%");
        STYLED(DATA,"font-size","23px");
        COLOR(DATA,"forestgreen");

    });

    BUTTON("","Shop Now",(DATA)=>{

        POSITION(DATA,"absolute");
        LEFT(DATA,"10%");
        WIDTH(DATA,"80%");
        BOTTOM(DATA,"150px");
        BACKGROUND(DATA,"purple");
        COLOR(DATA,"white");

        CLICK(DATA,()=>{

            LOCALSTORE("Welcome","True");

            ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

        });

    });

    HEADER("","Yash Group Of Companies",(DATA)=>{

        WIDTH(DATA,"80%");
        POSITION(DATA,"absolute");
        BOTTOM(DATA,"30px");
        LEFT(DATA,"12%")
        STYLED(DATA,"font-size","16px");

    });

};

const MOBILEHOMEPAGE=()=>{

    CLEAR();

    HEADER("","HOMEPAGE",()=>{

    });

};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});