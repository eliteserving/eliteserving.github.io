
export const ICONTEXT=(HOLDER,LIGHTICON,DARKICON,WORD,CALLBACK)=>{

    VIEWS(HOLDER,(DATA)=>{

        WIDTH(DATA,"auto");

        HEIGHT(DATA,"");

        ICONS(DATA,LIGHTICON,DARKICON,(DATAICON)=>{

            MARGINTOP(DATAICON,"1%");

        });

        HEADER(DATA,WORD||"Text",(DATATEXT)=>{

            WIDTH(DATATEXT,"90%");

            MARGIN(DATATEXT,"2%");

            PADDING(DATATEXT,"2%");

        });

        CALLBACK(DATA);

    });

};