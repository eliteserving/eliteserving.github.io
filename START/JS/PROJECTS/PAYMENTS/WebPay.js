export const WEBPAY=(DataHolder)=>{

    const SpecialPayments=document.querySelector(".SpecialPayments");
    SpecialPayments.style.display="block";

    DataHolder.innerHTML=`
        <h1>WEB PURCHASE</h1>
    `;

};