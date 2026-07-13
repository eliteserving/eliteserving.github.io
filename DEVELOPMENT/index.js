const MOBILEVIEW=()=>{
  const LOADDATA={
    home: () => {MJOMBALIWEBSTART();},
  };
  LINKTRACKER(LOADDATA,()=>{
    MJOMBALIWEBSTART();
  }); 
};
const DESKTOPVIEW=()=>{
  const LOADDATA={
    home: () => {MJOMBALIWEBSTART();},
  };
  LINKTRACKER(LOADDATA,()=>{
    MJOMBALIWEBSTART();
  }); 
};
VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});