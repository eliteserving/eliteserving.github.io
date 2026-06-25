export const PAYTOTA=(EMAIL,NAME,NUMBER,AMOUNT,CALLBACK)=>{

    const DATA={

        "email":EMAIL,
        "phone":NUMBER,
        "name":NAME,
        "price":AMOUNT
    };

    FETCH(PAYTOTAAPI,DATA,(Data)=>{

        CALLBACK(Data.checkout_url);

    });

};