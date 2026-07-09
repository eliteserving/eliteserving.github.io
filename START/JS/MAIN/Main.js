const FETCH=()=>{

    const DATA={

        "email":"",
        "phone":phone,
        "name":"Andrew",
        "price":180000
    };

    fetch("https://script.google.com/macros/s/AKfycbwxIUwkkXgPoj6xng1SI1h420S63hLCZ3eSoBPIoGSeOuiAy-rm8AWVvdpVYAbYbqiY/exec",{
        mode:"cors",
        method:"POST",
        body:JSON.stringify(DATA)
    })
    .then(res=>res.json())
    .then(Data=>{

        console.log(Data);

        Status.innerHTML="Payment profile created successfully ✔";


        setTimeout(()=>{

            location.href=Data.checkout_url;

        },1000);


    })

    .catch(Error=>{


        console.log(Error);

        Status.innerHTML="Payment failed. Try again.";

        Button.disabled=false;

        Button.innerHTML="Pay Now";


    });

}

const CLOSE=()=>{

    const SpecialPayments=document.querySelector(".SpecialPayments");

    SpecialPayments.style.display="none";

};

const CLOSER=()=>{

    const SpecialPayments=document.querySelector(".SpecialPayments");

    SpecialPayments.style.display="block";

};

const Android=document.querySelector("#Android");

Android.addEventListener("click",()=>{

    const SpecialPayments=document.querySelector(".DataHolder");

    SpecialPayments.innerHTML=`

        <br>

        <h1>ANDROID APP DEVELOPMENT</h1>

        <br>

        <p>Elite Robust Onotology ,Android App Development Is Charged As Below.</p>

        <br>

        <h2>Open App</h2>

        <p>Open Apps are Apps thats We Build and You The Owner Host On your Platform.</p>
        <br>
        <h4>Price:500,000UGX</h4>

        <br><br>

        <h2>Closed App</h2>

        <p>Closed Apps are Apps thats We Build and Build For it a Land Page Where Your Clients Can Get It.</p>
        <br>
        <h4>Price:800,000UGX</h4>

        <br><br>

        <h2>Hosted App</h2>

        <p>Hosted Apps are Apps thats We Build and We Get it Hosted To The Responsible Platforms.</p>
        <br>
        <h4>Price:1,000,000UGX</h4>

        <br><br>

        <h1>Payment Options</h1>

        <br>

        <div class="OptionOne">

            <header>

                <h1 class="Names">500,000UGX</h1>

            </header>

            <img src="./android.png"/>

            <button  id="Pay500"  class="Pay">Pay</button>

        </div>

        <br>

        <div class="OptionOne">

            <header>

                <h1 class="Names">800,000UGX</h1>

            </header>

            <img src="./android.png"/>

            <button  id="Pay500"  class="Pay">Pay </button>

        </div>

        <br>

        <div class="OptionOne">

            <header>

                <h1 class="Names">1,000,000UGX</h1>

            </header>

            <img src="./android.png"/>

            <button  id="Pay500"  class="Pay">Pay </button>

        </div>

        <br><br><br><br><br>
    
    `;

});

const PAYMENTPROFILE=()=>{

};

const ANDROIDPAYMENTS=()=>{

}