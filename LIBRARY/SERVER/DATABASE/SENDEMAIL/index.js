export const SENDEMAIL=(LINK,EMAIL,SUBJECT,MESSAGE,CALLBACK)=>{
    const DATA=[{
        "recipientEmail":EMAIL,
        "subject":SUBJECT,
        "body":MESSAGE        
    }];
    FETCH(LINK,DATA,(Data)=>{
        CALLBACK(Data);
    });
};