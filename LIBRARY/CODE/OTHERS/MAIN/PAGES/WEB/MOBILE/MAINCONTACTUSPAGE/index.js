export const WEBMAINHOMEMOBILECONTACTUSPAGE=(HOLDER)=>{
    HEADER(HOLDER,"Fill The Form Below",()=>{});
    BREAK(HOLDER,()=>{});
    INPUT(HOLDER,"text","Enter Your Name","Name",(DATA)=>{});
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    INPUT(HOLDER,"email","Enter Your Email","Email",()=>{});
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    INPUT(HOLDER,"text","Enter Subject Of Contact","Subject",()=>{});
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    TEXTAREA(HOLDER,"Compose Your Message","Message",(DATA)=>{WIDTH(DATA,"90%");HEIGHT(DATA,"200px");});
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    BUTTON(HOLDER,"Send Message",(DATA)=>{
        WIDTH(DATA,"90%");
        HEIGHT(DATA,"50px");
        BACKGROUND(DATA,"forestgreen");
        CLICK(DATA,()=>{
           TOASTEDMESSAGE(sessionStorage.getItem("Name"),"Enter Your Name",()=>{

            alert("")

           })
        });
    });
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    HEADER(HOLDER,"ELITE ROBUST ONTOLOGY - 2026",(DATA)=>{FONTSIZE(DATA,"20px");});
};