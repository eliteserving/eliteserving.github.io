export const ALLSHYLANSIRAJPAGE=()=>{

    HEADERVIEWSPAGE((HOLDER)=>{

        LEFTICON(HOLDER,WHITEBACKICON,BLACKBACKICON,(DATA)=>{

            CLICK(DATA,()=>{

                ROUTE("",SHYLANSIRAJANDROIDHOMEPAGE,"SHYLANSIRAJANDROIDHOMEPAGE");

            });

        });

        HEADER(HOLDER,"Catergory",(DATA)=>{

            MARGINRIGHT(DATA,"1%");

        });

    },(HOLDER)=>{

    });

};