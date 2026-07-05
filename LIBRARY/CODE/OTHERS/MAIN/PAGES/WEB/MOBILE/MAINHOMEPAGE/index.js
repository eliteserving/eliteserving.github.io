export const WEBMOBILEMAINHOMEPAGE=()=>{

    HEADERVIEWSPAGE((HOLDER)=>{

        LEFTICON(HOLDER,ELITEROBUSTONTOLOGYLOGO,ELITEROBUSTONTOLOGYLOGO,()=>{

        });

        HEADER(HOLDER,"Elite Robust Ontology",()=>{

        });

        RIGHTICON(HOLDER,WHITEMENUICON,BLACKMENUICON,()=>{

        });

    },(HOLDER)=>{

        BREAK(HOLDER,()=>{});

        HEADER(HOLDER,"Welcome",()=>{

        });

        BREAK(HOLDER,()=>{});

        const EliteMessage="Elite Robust Ontology is a Software Development Located In Mbale,Uganda.";

        LEFTTEXT(HOLDER,EliteMessage,()=>{

        });

        BREAK(HOLDER,()=>{});

        INLINEVIEW(HOLDER,(HOLDEES)=>{

            HEIGHT(HOLDEES,"50px");

            BUTTON(HOLDEES,"Imagine",(BTN)=>{

                BACKGROUND(BTN,"green");  
                WIDTH(BTN,"30%");

            });

            BUTTON(HOLDEES,"Innovate",(BTN)=>{

                BACKGROUND(BTN,"teal");
                WIDTH(BTN,"35%");

            });

            BUTTON(HOLDEES,"Inspire",(BTN)=>{

                BACKGROUND(BTN,"green");
                WIDTH(BTN,"30%");

            });
            
        });

        BREAK(HOLDER,()=>{});

        BREAK(HOLDER,()=>{});

        HEADER(HOLDER,"VENTURES",()=>{

        });

        const EliteMessageTwo="We Venture In The Following Sectors Of Software Development As Stated Below.";

        LEFTTEXT(HOLDER,EliteMessageTwo,()=>{

        });

        BREAK(HOLDER,()=>{});

        LEFTTEXT(HOLDER,"Website Development.",()=>{

        });

        LEFTTEXT(HOLDER,"Mobile App Development.",()=>{

        });

        LEFTTEXT(HOLDER,"System Development.",()=>{

        });

        LEFTTEXT(HOLDER,"Desktop Software  Development.",()=>{

        });

        BREAK(HOLDER,()=>{

        });

        HEADER(HOLDER,"Contact Us",()=>{

        });

        BREAK(HOLDER,()=>{

        });

        INLINEVIEW(HOLDER,(HOLDEES)=>{

            HEIGHT(HOLDEES,"50px");

            BUTTON(HOLDEES,"Facebook",(BTN)=>{

                BACKGROUND(BTN,BLUE);  
                WIDTH(BTN,"30%");

            });

            BUTTON(HOLDEES,"Instagram",(BTN)=>{

                BACKGROUND(BTN,BROWN);
                WIDTH(BTN,"35%");

            });

            BUTTON(HOLDEES,"X",(BTN)=>{

                BACKGROUND(BTN,BLACK);
                WIDTH(BTN,"20%");

            });
            
        });

    });
    
};