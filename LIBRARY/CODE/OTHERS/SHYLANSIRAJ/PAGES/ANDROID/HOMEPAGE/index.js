export const SHYLANSIRAJANDROIDHOMEPAGE=()=>{

    FOOTERVIEWSPAGE((HOLDER)=>{

        HEADER(HOLDER,"PLease Wait",()=>{

            GETDATA(SHYRAJDATABASEMAINAPI,"SHYLANSIRAJFASHIONHUB",(DATA)=>{

                CLEAR(HOLDER);
    
                REDUX(DATA,(Element)=>{

                    TABLEVIEW(HOLDER,(HOLDEE)=>{

                        IMAGE(HOLDEE,GOOGLEDRIVETHUMBNAILAPI+Element.FILELINK||SHYLANSIRAJLOGO,()=>{

                        });

                    });
    
                });
    
            });

        });

    },(HOLDER)=>{

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