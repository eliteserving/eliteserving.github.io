
export const GETSMS = (callback)=>{
    CONDITION(localStorage.getItem("ENV") === "ANDROID",()=>{
        if(!window.AndroidSMS){callback([]);return;}
        const json =AndroidSMS.getAllSms();
        const sms =JSON.parse(json);
        callback(sms);
    },()=>{
        REDUX("../")

    });
};