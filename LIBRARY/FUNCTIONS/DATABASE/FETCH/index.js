export const FETCH=(LINK,DATA,CALLBACK)=>{
    ONLINE(()=>{
        fetch(LINK,{
            mode:"cors",
            method:"POST",
            body: JSON.stringify(DATA)
        })
        .then(res =>res.json())
        .then(Data =>{
            CALLBACK(Data);
        })
        .catch(Error =>{console.log(Error)})
    });
};