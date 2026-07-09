export const POLICIESDOWNLOAD=(NAME,CALLBACK)=>{

    const TITLE = document.title;

    CONDITION(TITLE === "EliteBuilder",()=>{

        const LINK="../../LIBARAY/POLICIES/"+NAME;

        TEXTFETCH(LINK,"",(DATA)=>{

            CALLBACK(DATA);
            
        });

    },()=>{

        const LINK="https://eliteserving.github.io/LIBARAY/POLICIES/"+NAME;

        TEXTFETCH(LINK,"",(DATA)=>{

            CALLBACK(DATA);
            
        });

    });

};