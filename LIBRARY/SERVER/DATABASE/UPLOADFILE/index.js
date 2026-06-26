export const UPLOADFILE=(NAME,BASEFILE,TYPE,CALLBACK)=>{

    const DATA = {
        id: "UPLOAD-001",
        fileName: NAME||"Upload.jpg",
        mimeType:TYPE||"image/jpeg",
        file: BASEFILE
    };

    FETCH(GOOGLEDRIVEAPI,DATA,(Data)=>{

        CALLBACK(Data);

    });
    
};