import { ANDROIDPAY } from "./AndroidPay.js";
import { DESKTOPPAY } from "./DesktopPay.js";
import { IDPAY } from "./IdPay.js";
import { OTHERPAY } from "./OtherPay.js";
import { WEBPAY } from "./WebPay.js";

export const PAYMENTS=()=>{

    document.querySelector("body").innerHTML=`
        
        <div class="Holder">

            <br>

            <h1>ELITE ROBUST ONTOLOGY</h1>

            <br>

            <h1 class="Serviecs" >Please Choose Service</h1>
            
            <br>

            <div class="OptionsHolder">

                <div class="OptionOne">

                    <header>

                        <h1 class="Names">Android Apps</h1>

                    </header>

                    <img src="https://eliteserving.github.io/START/ASSETS/IMAGES/android.png"/>

                    <button  id="Android"  class="Pay">Pay Now</button>

                </div>

                <div class="OptionOne">

                    <header>

                        <h1 class="Names">Desktop Apps </h1>

                    </header>

                    <img src="https://eliteserving.github.io/START/ASSETS/IMAGES/Desktop.webp"/>

                    <button id="Desktop"  class="Pay">Pay Now</button>

                </div>

                <div class="OptionOne">

                    <header>

                        <h1 class="Names">Websites </h1>

                    </header>

                    <img src="https://eliteserving.github.io/START/ASSETS/IMAGES/web.webp"/>

                    <button id="Web" class="Pay">Pay Now</button>

                </div>

                <div class="OptionOne">

                    <header>

                        <h1 class="Names">Other Services </h1>

                    </header>

                    <img src="https://eliteserving.github.io/START/ASSETS/IMAGES/others.webp"/>

                    <button id="Others"  class="Pay">Pay Now</button>

                </div>

            </div>

            <br>

            <br>

            <h1>Direct Pay</h1>

            <br>

            <input type="text" placeholder="Enter Payment Id">

            <br>

            <br>

            <button id="IdPay">Pay Now</button>

            <br><br> <br><br>

            <p>@Elite Robust Ontology,2026</p>

            <br><br> <br><br>

        </div>

        <div class="SpecialPayments">

            <header>

                <h1 id="Close" class="Names">CLOSE</h1>

            </header>

            <div class="DataHolder"></div>

        </div>
    
    `;
    const DataHolder=document.querySelector(".DataHolder");
    const SpecialPayments=document.querySelector(".SpecialPayments");
    const Close=document.querySelector("#Close").addEventListener("click",()=>{SpecialPayments.style.display="none";});
    const Android=document.querySelector("#Android").addEventListener("click",()=>{ANDROIDPAY(DataHolder);});
    const Desktop=document.querySelector("#Desktop").addEventListener("click",()=>{DESKTOPPAY(DataHolder);});
    const Web=document.querySelector("#Web").addEventListener("click",()=>{WEBPAY(DataHolder);});
    const Others=document.querySelector("#Others").addEventListener("click",()=>{OTHERPAY(DataHolder);});
    const IdPay=document.querySelector("#IdPay").addEventListener("click",()=>{IDPAY();});
};