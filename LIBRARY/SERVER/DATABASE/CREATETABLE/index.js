export const CREATETABLE=(LINK,NAME,CALLBACK)=>{
    CAPITALIZED(NAME,(NAMEDATA)=>{
        const DATA={
            "spreadsheetUrl":LINK,
            "sheetName":NAMEDATA,
        };
        FETCH(createt,DATA,(Data)=>{
            CHECK(Data.error === false,()=>{
                GETDATA(MAINCONNECTIONAPI,"DATABASES",(Datated)=>{
                    REDUX(Datated,(Element)=>{
                        CHECK(Element.DATABASELINK === LINK,()=>{
                            JSONADDER(Element.DATABASETABLES,[NAMEDATA],(TABLES)=>{
                                const INFO=[Element.DATABASENAME,Element.DATABASELINK,TABLES,Element.DATE,Element.ACCESS,Element.ADMIN];
                                UPDATEDATA(MAINCONNECTIONAPI,"DATABASES",Element.ID,INFO,()=>{
                                    CALLBACK("Table Created Successfully");
                                });
                            });
                        });
                    });
                });;
            });
        });
    });
}; 