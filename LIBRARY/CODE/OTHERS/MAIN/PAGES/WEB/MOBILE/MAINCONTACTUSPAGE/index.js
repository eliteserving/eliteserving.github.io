export const WEBMAINHOMEMOBILECONTACTUSPAGE=(HOLDER)=>{
    HEADER(HOLDER,"Fill The Form Below",()=>{});
    BREAK(HOLDER,()=>{});
    INPUT(HOLDER,"text","Enter Your Name",()=>{});
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    INPUT(HOLDER,"email","Enter Your Email",()=>{});
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    INPUT(HOLDER,"text","Enter Subject Of Contact",()=>{});
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    TEXTAREA(HOLDER,"Compose Your Message",(DATA)=>{
        WIDTH(DATA,"90%");
        HEIGHT(DATA,"200px");
    });
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    BUTTON(HOLDER,"Send Message",(DATA)=>{
        WIDTH(DATA,"90%");
        HEIGHT(DATA,"50px");
        BACKGROUND(DATA,"forestgreen");
    });
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    HEADER(HOLDER,"ELITE ROBUST ONTOLOGY-2026",(DATA)=>{FONTSIZE(DATA,"20px");});
};