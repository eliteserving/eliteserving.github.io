const MOBILEVIEW=()=>{
  const LOADDATA={
    payment: () => {MAINPAYMENT();}
  }
  LINKTRACKER(LOADDATA,()=>{
    WEBMAINSTARTPAGE();
  });
};

const DESKTOPVIEW=()=>{
  const LOADDATA={
    home: () => {WEBMAINSTARTPAGE();}
  }
  LINKTRACKER(LOADDATA,()=>{
    WEBMAINSTARTPAGE();
  }); 
};
VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});