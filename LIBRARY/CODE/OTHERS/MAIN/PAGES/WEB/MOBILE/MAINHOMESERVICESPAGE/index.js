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
            CLICK(DATA,()=>{BOTTOMVIEW("Mobile Apps",(DATATA)=>{LOADINGICON(DATATA,(LOAD)=>{ POLICIESDOWNLOAD("MAIN/Android.txt","",(Data)=>{ DISPLAY(DATATA,Data);});});});});
        });
        VIEWBOTTOMHOLDER(DATA,MAINWEBSITEDEVELOPMENTIMAGE,"Web Sites",(DATA)=>{ 
            WIDTH(DATA,"45%");
            HEIGHT(DATA,"200px");
            INLINETABLE(DATA);
            CLICK(DATA,()=>{BOTTOMVIEW("Web Sites",(DATATA)=>{LOADINGICON(DATATA,(LOAD)=>{ POLICIESDOWNLOAD("MAIN/Web.txt","",(Data)=>{ DISPLAY(DATATA,Data);});});});});
        });
        VIEWBOTTOMHOLDER(DATA,MAINDESKTOPDEVELOPMENTIMAGE,"Desktop Apps",(DATA)=>{ 
            WIDTH(DATA,"45%");
            HEIGHT(DATA,"200px");
            INLINETABLE(DATA);
            CLICK(DATA,()=>{BOTTOMVIEW("Desktop Apps",(DATATA)=>{LOADINGICON(DATATA,(LOAD)=>{ POLICIESDOWNLOAD("MAIN/Desktop.txt","",(Data)=>{ DISPLAY(DATATA,Data);});});});});
        });
        VIEWBOTTOMHOLDER(DATA,MAINSYSTEMDEVELOPMENTIMAGE,"Systems Apps",(DATA)=>{ 
            WIDTH(DATA,"45%");
            HEIGHT(DATA,"200px");
            INLINETABLE(DATA);
            CLICK(DATA,()=>{BOTTOMVIEW("System Intergration Apps",(DATATA)=>{LOADINGICON(DATATA,(LOAD)=>{ POLICIESDOWNLOAD("MAIN/System.txt","",(Data)=>{ DISPLAY(DATATA,Data);});});});});
        });
    });
};