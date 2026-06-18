export const GETSMS = (callback)=>{
    if(!window.AndroidSMS){callback([]);return;}
    const json =AndroidSMS.getAllSms();
    const sms =JSON.parse(json);
    JSONIFICATION(DATATA,(Data)=>{
        REDUX(Data,(Daata)=>{
            callback(Daata);
        });
    });
};