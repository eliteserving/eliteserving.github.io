import { WIDTH } from "../../../../../../CONNECTION";

export const SHYLANSIRAJANDROIDHOMEPAGE=()=>{

    const LINK="https://docs.google.com/spreadsheets/d/1D7Km39gogTyE1i991NJ9E0jxYBzlhga2vuDpHv4rNk8/edit?usp=sharing";

    FOOTERVIEWSPAGE((HOLDER)=>{

        HEADER(HOLDER,"PLease Wait",()=>{

            GETDATA(LINK,"SHYLANSIRAJFASHIONHUB",(DATA)=>{

                CLEAR(HOLDER);
    
                REDUX(DATA,(Element)=>{

                    console.log(Element)

                    TABLEVIEW(HOLDER,(HOLDEE)=>{

                        IMAGE(HOLDEE,GOOGLEDRIVETHUMBNAILAPI+Element.FILELINK||SHYLANSIRAJLOGO,(IMG)=>{

                            WIDTH(IMG,"");

                        });

                        BACKGROUND(HOLDEE,"blue");

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