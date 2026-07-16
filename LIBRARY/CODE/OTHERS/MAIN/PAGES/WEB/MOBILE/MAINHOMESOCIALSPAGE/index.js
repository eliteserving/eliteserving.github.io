export const WEBMAINHOMEMOBILESOCIALMEDIAPAGES=(HOLDER)=>{
    HEADER(HOLDER,"SOCIAL MEDIA",(DATA)=>{FONTSIZE(DATA,"20px");});
    BREAK(HOLDER,()=>{});
    INLINEVIEW(HOLDER,(DATA)=>{
        ICONTEXT(DATA,COLOREDFACEBOOKICON,COLOREDFACEBOOKICON,"FaceBook",(DATATA)=>{
            CLICK(DATATA,()=>{
                WEBSITE("https://www.facebook.com/share/18zEbMD4o4/");
            });
        });
        ICONTEXT(DATA,COLOREDINSTAGRAM,COLOREDINSTAGRAM,"Instagram",(DATATA)=>{
            CLICK(DATATA,()=>{
                WEBSITE("https://www.instagram.com/eliterobustontology_?utm_source=qr&igsh=aGI5bXYxOXg3Z2xj");
            });
        });
        ICONTEXT(DATA,WHITEYOUTUBEICON,BLACKYOUTUBEICON,"YouTube",(DATATA)=>{
            CLICK(DATATA,()=>{
                WEBSITE("https://www.youtube.com/@eliterobustontology")
            });
        });
    });
    HEADER(HOLDER,"ELITE ROBUST ONTOLOGY-2026",(DATA)=>{FONTSIZE(DATA,"20px");});
};