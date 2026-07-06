export const SHYLANSIRAJANDROIDPROFILEPAGE=()=>{

    HEADERVIEWSPAGE((HOLDER)=>{

        LEFTICON(HOLDER,WHITEBACKICON,BLACKBACKICON,(DATA)=>{

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