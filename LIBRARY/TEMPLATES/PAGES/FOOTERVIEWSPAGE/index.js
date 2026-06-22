export const FOOTERVIEWSPAGE=(CALLBACK,CALLBACKED)=>{

    CLEAR("");

    VIEWS("",(HOLDER)=>{

        CALLBACK(HOLDER);

    });

    FOOTER("",(HOLDER)=>{

        CALLBACKED(HOLDER);

    });

};