const LINK="https://docs.google.com/spreadsheets/d/1D7Km39gogTyE1i991NJ9E0jxYBzlhga2vuDpHv4rNk8/edit?usp=sharing";

export const SHYLANSIRAJANDROIDHOMEPAGE=()=>{

    FOOTERVIEWSPAGE((HOLDER)=>{

    },(HOLDER)=>{

        ICONTEXT(HOLDER,BLACKGRIDICON,WHITEHOMEICON,"All",(DATA)=>{

            FILEPICKER(DATA,(Data)=>{

               

                UPLOADFILE(Data.Name,Data.data,"",(ResData)=>{

                    console.log(ResData)

                });

            });

        });

        ICONTEXT(HOLDER,BLACKGRIDICON,WHITEGRIDICON,"All",(DATA)=>{

            CLICK(DATA,()=>{

                ROUTE(" ",ALLSHYLANSIRAJPAGE,"SHYLANSIRAJANDROIDHOMEPAGE");

            });

        });

        ICONTEXT(HOLDER,WHITEHEARTICON,WHITEHEARTICON,"Saved",(DATA)=>{

            CLICK(DATA,()=>{

                ROUTE(" ",SHYLANSIRAJANDROIDLIKEDITEMPAGE,"SHYLANSIRAJANDROIDHOMEPAGE");

            });

        });

        ICONTEXT(HOLDER,BLACKUSERICON,WHITEUSERICON,"Profile",(DATA)=>{

            CLICK(DATA,()=>{

                ROUTE(" ",SHYLANSIRAJANDROIDPROFILEPAGE,"SHYLANSIRAJANDROIDHOMEPAGE");

            });

        });
        
    });

};