export const GETSMS = (callback) => {
    if (window.AndroidSMS && typeof AndroidSMS.getLatestSms === "function") {
        const sms = AndroidSMS.getLatestSms();
        if (typeof callback === "function") {
            callback(sms);
        }
        return sms;
    }
    return null;
};