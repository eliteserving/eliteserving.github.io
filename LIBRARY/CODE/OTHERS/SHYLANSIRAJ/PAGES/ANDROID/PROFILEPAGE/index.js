export const SHYLANSIRAJANDROIDPROFILEPAGE=()=>{

    HEADERVIEWSPAGE((HOLDER)=>{

        LEFTICON(HOLDER,BLACKBACKICON,WHITEBACKICON,(DATA)=>{

            CLICK(DATA,()=>{

                ROUTE("",SHYLANSIRAJANDROIDHOMEPAGE,"SHYLANSIRAJANDROIDHOMEPAGE");

            });

        });

        HEADER(HOLDER,"Profile",(DATA)=>{

            MARGINRIGHT(DATA,"1%");

        });

    },(HOLDER)=>{

    });

};