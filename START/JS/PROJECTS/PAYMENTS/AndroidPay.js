export const ANDROIDPAY=(DataHolder)=>{

    const SpecialPayments=document.querySelector(".SpecialPayments");
    SpecialPayments.style.display="block";

    DataHolder.innerHTML=`
        <br>
        <h1>MOBILE APP PURCHASE</h1>
        <br>
        <p>Elite Robust Ontology ,We Provide Three Types Of Mobile Apps To The Client Basing On the Package Package Paid.</p>
        <br>
        <h1>OPEN MOBILE APPS</h1>
        <br>
        <p>These are Normal Apk For Android And Progressive Web Apps That We Develop For the User and They Host It On there Own Platform or Other Platforms.</p>
        <br>
        <h2>Price:UGX 500,0000</h2>
        <br>
        <p>Enter Phone Number Below to Purchase Open App.</p>
        <br>
        <input type="tel" placeholder="Enter Payment Phone Number">
        <br><br>
        <button id="IdPay">Order Open App</button>
        <br><br>
        <h1>CLOSED MOBILE APPS</h1>
        <br>
        <p>Closed Mobile Apps Are Apps that We Develop And Host On Our Platforms like Website Landing Pages But They Are Not Hosted On To The Major Stores,But They Are Fully Managed By Elite Robust Ontology.</p>
        <br>
        <h2>Price:UGX 800,0000</h2>
        <br>
        <p>Enter Phone Number Below to Purchase Closed App.</p>
        <br>
        <input type="tel" placeholder="Enter Payment Phone Number">
        <br><br>
        <button id="IdPay">Order Closed App</button>
        <br><br>
        <h1>HOSTED MOBILE APPS</h1>
        <br>
        <p>Hosted Mobile Apps Are Apps that We Develop And Host On All Known Major and Minor Platforms like Website Landing Pages,PlayStore,AppStore,Mircosoft , They Are Fully Managed By Elite Robust Ontology.</p>
        <br>
        <h2>Price:UGX 1,000,0000</h2>
        <br>
        <p>Enter Phone Number Below to Purchase Hosted App.</p>
        <br>
        <input type="tel" placeholder="Enter Payment Phone Number">
        <br><br>
        <button id="IdPay">Order Hosted App</button>
        <br><br><br><br>
    `;

};