const MOBILEVIEW=()=>{

    CLEAR("");

    VIEWS("",(DATA)=>{

        BACKGROUND(DATA,"white");

        POSITION(DATA,"absolute");
        TOP(DATA,"0px");
        HEIGHT(DATA,"auto");
        BOTTOM(DATA,"100px");

        CLEAR(DATA);

        GETSMS((DATATA)=>{

            VIEWS(DATA,(DATED)=>{

                BACKGROUND(DATED,"forestgreen");
                WIDTH(DATED,"95%");
                HEIGHT(DATED,"auto");
                MARGIN(DATED,"2%");
                BORDERRADIUS(DATED,"5px");

                HEAD(DATED,(DATAS)=>{

                    POSITION(DATAS,"relative");
                    BACKGROUND(DATAS,"teal");

                    HEADER(DATAS,DATATA.sender,()=>{
    
                    });

                });

                INLINEVIEW(DATED,(DATEDS)=>{

                    HEADER(DATEDS,DATATA.message,(MESSAGE)=>{

                        MARGINLEFT(MESSAGE,"2%");
                        
                    });

                });

            });

        });

    });

    FOOTER("",(DATA)=>{

        BACKGROUND(DATA,"black");

        DISPLAY(DATA,`

        <nav class="bottom-nav">
                <a style="text-decoration:none;" href="about-us.php" class="bottom-nav-item">
                    <span class="bottomNavIcon"><img class="Icon" src="${WHITELIBRARYICON}"></span>
                    <span class="bottomnavText">All</span>
                </a>
                <a style="text-decoration:none;" href="about-us.php" class="bottom-nav-item">
                    <span class="bottomNavIcon"><img class="Icon" src="${WHITEDEVICEICON}"></span>
                    <span class="bottomnavText">Synced</span>
                </a>
                <a style="text-decoration:none;" href="about-us.php" class="bottom-nav-item">
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
                background-color: var(--nav-bg);
                padding: 10px 0;
                position: fixed;
                bottom: 0;
                width: 100%;
                z-index: 1000;
                box-shadow: 0 -4px 20px rgba(0,0,0,0.5);
                border-top: 1px solid rgba(255,255,255,0.1);
            }
            .bottom-nav-item { 
                text-align: center; 
                color: #94a3b8; 
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

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});