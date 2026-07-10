export const SHYLANSIRAJANDROIDMOBILEPOLICIESPAGE=()=>{
    HEADERVIEWSPAGE((HOLDER)=>{
        HEADER(HOLDER,"PRIVACY POLICY",()=>{});
    },(HOLDER)=>{
        LOADINGICON(HOLDER,(LOAD)=>{
            POLICIESDOWNLOAD("SHYLANSIRAJ/AppUser.txt","",(DATA)=>{
                DISPLAY(HOLDER,DATA);
                const POLICYCSS=`
                    .AgreeButton{
                        background:green;
                        color:white;
                        width:90%;
                        height:50px;
                        border-radius:10px;
                    }
                `;
                INJECTCSS(POLICYCSS);
                const AGREE=document.querySelector(".AgreeButton");
                AGREE.addEventListener("click",()=>{
                    LOCALSTORE("Policies",true);
                    ROUTE("",SHYLANSIRAJANDROIDHOMEPAGE,SHYLANSIRAJANDROIDHOMEPAGE);
                });
            });
        });
    });
};