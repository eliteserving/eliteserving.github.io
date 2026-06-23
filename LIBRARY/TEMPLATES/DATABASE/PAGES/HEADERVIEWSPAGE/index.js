export const HEADERVIEWSPAGE=(CALLBACK,CALLBACKED)=>{

    CLEAR("");

    HEAD("",(HOLDER)=>{

        CALLBACK(HOLDER);

    });

    VIEWS("",(HOLDER)=>{

        CALLBACKED(HOLDER);

    });

};