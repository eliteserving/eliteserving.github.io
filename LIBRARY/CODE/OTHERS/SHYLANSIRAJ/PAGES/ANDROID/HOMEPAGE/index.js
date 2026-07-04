export const SHYLANSIRAJANDROIDHOMEPAGE=()=>{

    FOOTERVIEWSPAGE((HOLDER)=>{

        HEADER(HOLDER,"PLease Wait",()=>{

            GETDATA(SHYRAJDATABASEMAINAPI,"SHYLANSIRAJFASHIONHUB",(DATA)=>{

                CLEAR(HOLDER);
    
                REDUX(DATA,(Element)=>{

                    TABLEVIEW(HOLDER,(HOLDEE)=>{

                        BACKGROUND(HOLDEE,GRAY+"50");

                        VIEWS(HOLDEE,(DATA)=>{

                            HEIGHT(DATA,"50px");

                            BREAK(DATA,()=>{})

                            LEFTTEXT(DATA, "UGX : "+Element.AMOUNT);

                        });

                        IMAGE(HOLDEE,GOOGLEDRIVETHUMBNAILAPI+Element.FILELINK||SHYLANSIRAJLOGO,(IMG)=>{

                            HEIGHT(IMG,"200px");

                        });

                        VIEWS(HOLDEE,(DATA)=>{

                            HEIGHT(DATA,"50px");

                            LEFTTEXT(DATA,Element.NAME);

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