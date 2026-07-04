export const SHYLANSIRAJANDROIDLIKEDITEMPAGE=()=>{

    HEADERVIEWSPAGE((HOLDER)=>{

        LEFTICON(HOLDER,WHITEBACKICON,BLACKBACKICON,(DATA)=>{

            CLICK(DATA,()=>{

                ROUTE("",SHYLANSIRAJANDROIDHOMEPAGE,"SHYLANSIRAJANDROIDHOMEPAGE");

            });

        });

        HEADER(HOLDER,"Saved Items",(DATA)=>{

            MARGINRIGHT(DATA,"1%");

        });

    },(HOLDER)=>{

    });

};