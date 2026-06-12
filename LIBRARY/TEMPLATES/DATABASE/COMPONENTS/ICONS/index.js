export const ICONS=(HOLDER,LIGHT,DARK,CALLBACk)=>{

    CONDITION(sessionStorage.getItem("theme") === "dark",()=>{

        IMAGE(HOLDER,DARK,(DATA)=>{

            WIDTH(DATA,"20px");
            
            HEIGHT(DATA,"20px");  

            MARGIN(DATA,"auto");

            CALLBACk(DATA);

        });

    },()=>{

        IMAGE(HOLDER,DARK,(DATA)=>{

            WIDTH(DATA,"20px");
            
            HEIGHT(DATA,"20px");  

            MARGIN(DATA,"auto");

            CALLBACk(DATA);
            
        });

    });

};