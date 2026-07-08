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

};

const PAYMENTPROFILE=()=>{

};