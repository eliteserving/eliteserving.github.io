const MOBILEVIEW=()=>{
  const LOADDATA={
    payment: () => {MAINPAYMENT();}
  };
  LINKTRACKER(LOADDATA,()=>{
    WEBMAINSTARTPAGE();
  });
};
const DESKTOPVIEW=()=>{
  const LOADDATA={
    payment: () => {MAINPAYMENT();}
  };
  LINKTRACKER(LOADDATA,()=>{
    WEBMAINSTARTPAGE();
  }); 
};
VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});