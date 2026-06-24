export const ALLSHYLANSIRAJPAGE=()=>{

    HEADERVIEWSPAGE((HOLDER)=>{

        LEFTICON(HOLDER,BLACKBACKICON,WHITEBACKICON,(DATA)=>{

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