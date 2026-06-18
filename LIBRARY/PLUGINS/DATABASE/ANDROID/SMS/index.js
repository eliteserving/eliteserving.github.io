export const GETSMS = (callback)=>{
    if(!window.AndroidSMS){callback([]);return;}
    const json =AndroidSMS.getAllSms();
    const sms =JSON.parse(json);
    JSONIIFICATION(sms,(smes)=>{
        REDUX(smes,(Data)=>{
            callback(Data);
        });
    });
};