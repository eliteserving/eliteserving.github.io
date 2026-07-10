export const OTHERPAY=(DataHolder)=>{

    const SpecialPayments=document.querySelector(".SpecialPayments");
    SpecialPayments.style.display="block";

    DataHolder.innerHTML=`
        <h1>OTHERS PURCHASE</h1>
    `;

};