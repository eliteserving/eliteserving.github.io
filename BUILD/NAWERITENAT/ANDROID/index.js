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

            FETCH("https://rentals.naweriindustries.com/endpoints/triggers.php","",(DATA)=>{
                LOCALSTORE("MESSAGES",[DATA.keywords]);
            });

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

                    ROUTE("",FULLMESSAGE,MOBILEVIEW);

                });

            });

        });

    });

    FOOTER("",(DATA)=>{

        BACKGROUND(DATA,"black");
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

    HEAD("",()=>{

    })

};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});