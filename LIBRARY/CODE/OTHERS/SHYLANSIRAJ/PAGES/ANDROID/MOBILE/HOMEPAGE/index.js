export const SHYLANSIRAJANDROIDHOMEPAGE=()=>{

    FOOTERVIEWSPAGE((HOLDER)=>{

        HEADER(HOLDER,"PLease Wait",()=>{

            GETDATA(SHYRAJDATABASEMAINAPI,"SHYLANSIRAJFASHIONHUB",(DATA)=>{

                CLEAR(HOLDER);
    
                REDUX(DATA,(Element)=>{

                    TABLEVIEW(HOLDER,(HOLDEE)=>{

                        BACKGROUND(HOLDEE,"");

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

        ICONTEXT(HOLDER,WHITEGRIDICON,BLACKGRIDICON,"All",(DATA)=>{

            CLICK(DATA,()=>{

                ROUTE(" ",ALLSHYLANSIRAJPAGE,"SHYLANSIRAJANDROIDHOMEPAGE");

            });

        });

        ICONTEXT(HOLDER,WHITEHEARTICON,WHITEHEARTICON,"Saved",(DATA)=>{

            CLICK(DATA,()=>{

                ROUTE(" ",SHYLANSIRAJANDROIDLIKEDITEMPAGE,"SHYLANSIRAJANDROIDHOMEPAGE");

            });

        });

        ICONTEXT(HOLDER,WHITEUSERICON,BLACKUSERICON,"Profile",(DATA)=>{

            CLICK(DATA,()=>{

                ROUTE(" ",SHYLANSIRAJANDROIDPROFILEPAGE,"SHYLANSIRAJANDROIDHOMEPAGE");

            });

        });
        
    });

};