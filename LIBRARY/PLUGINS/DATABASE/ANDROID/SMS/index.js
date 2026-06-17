export const GETSMS = (callback)=>{
    if(!window.AndroidSMS){
        callback([]);
        return;
    }
    const json =AndroidSMS.getAllSms();
    const sms =
        JSON.parse(json);
    callback(sms);
};