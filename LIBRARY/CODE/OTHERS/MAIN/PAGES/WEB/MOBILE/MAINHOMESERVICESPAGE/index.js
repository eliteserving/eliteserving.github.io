export const WEBMAINMOBILESERVICESPAGE=(HOLDER)=>{
    HEADER(HOLDER,"SERVICES OFFERED",(DATA)=>{FONTSIZE(DATA,"20px");});
    BREAK(HOLDER,()=>{});
    VIEWS(HOLDER,(DATA)=>{
        WIDTH(DATA,"90%");
        HEIGHT(DATA,"450px");
        BACKGROUND(DATA,"transparent");
        BORDERRADIUS(DATA,"10px");
        OVERFLOW(DATA,"hidden");
        VIEWBOTTOMHOLDER(DATA,MAINMOBILEDEVELOPMENT,"Mobile Apps",(DATA)=>{ 
            WIDTH(DATA,"45%");
            HEIGHT(DATA,"200px");
            INLINETABLE(DATA);
            CLICK(DATA,()=>{
                BOTTOMVIEW("Mobile Apps",(DATATA)=>{
                    LEFTTEXT(DATATA,"Elite Robust Ontology Uses Cloud Native State Of the Art in Technology to Power Your Mobile App ,Wether Its For IOS Operating System Or Android Operating System.",()=>{});
                });
            });
        });
        VIEWBOTTOMHOLDER(DATA,MAINWEBSITEDEVELOPMENTIMAGE,"Web Sites",(DATA)=>{ 
            WIDTH(DATA,"45%");
            HEIGHT(DATA,"200px");
            INLINETABLE(DATA);
            CLICK(DATA,()=>{
                BOTTOMVIEW("Web Sites",(DATATA)=>{
                    
                });
            });
        });
        VIEWBOTTOMHOLDER(DATA,MAINDESKTOPDEVELOPMENTIMAGE,"Desktop Apps",(DATA)=>{ 
            WIDTH(DATA,"45%");
            HEIGHT(DATA,"200px");
            INLINETABLE(DATA);
            CLICK(DATA,()=>{
                BOTTOMVIEW("Desktop Apps",(DATATA)=>{

                });
            });
        });
        VIEWBOTTOMHOLDER(DATA,MAINSYSTEMDEVELOPMENTIMAGE,"Systems Apps",(DATA)=>{ 
            WIDTH(DATA,"45%");
            HEIGHT(DATA,"200px");
            INLINETABLE(DATA);
            CLICK(DATA,()=>{
                BOTTOMVIEW("Systems Intergrations",(DATATA)=>{
                    
                });
            });
        });
    });
};