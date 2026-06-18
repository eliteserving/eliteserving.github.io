const MOBILEVIEW=()=>{

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

            /*

            FETCH("https://rentals.naweriindustries.com/endpoints/triggers.php","",(DATA)=>{
                LOCALSTORE("MESSAGES",[DATA.keywords]);
            });

            */

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

    FOOTER("",(DATA)=>{

        BACKGROUND(DATA,"black");
        COLOR(DATA,"white");
        HEIGHT(DATA,"100px");

        DISPLAY(DATA,`

        <nav class="bottom-nav">

                <a style="text-decoration:none;"  class="bottom-nav-item">
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
        
                        <input class="Email" value="${Data.data.email}"  type="email" placeholder="Enter Email to Login"/>
        
                        <br><br><br>
        
                        <button class="ConnectAccount" onclick="LOGIN()">Update Connection</button>
                    
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

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});