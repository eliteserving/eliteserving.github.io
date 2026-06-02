export const FETCH=(LINK,DATA,CALLBACK)=>{
    ONLINE(()=>{
        fetch(LINK,{
            mode:"cors",
            method:"POST"
        })
        .then(res =>res.json())
        .then(Data =>{
            CALLBACK(Data);
        })
        .catch(Error =>{console.log(Error)})
    });
};