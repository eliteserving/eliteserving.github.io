export const ELITEINQUIRIES=()=>{

    const HEAD=["NAME","EMAIL","SUBJECT","MESSAGE","DATE","ACCESS"];
    const DATA=[sessionStorage.getItem("Name"),sessionStorage.getItem("Email"),sessionStorage.getItem("Subject"),sessionStorage.getItem("Message"),]



    INSERTDATA(ELITEDATABASELINK,"INQUIRIES",HEAD,DATA,()=>{

    });

};