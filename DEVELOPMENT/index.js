const MOBILEVIEW=()=>{

  const LOADDATA={
    home: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    contactus: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    profile: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    saved: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    catergories: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
  };

  LINKTRACKER(LOADDATA,()=>{

    SHYLANSIRAJANDROIDSTARTPAGE();

  });
    
};

const DESKTOPVIEW=()=>{

  CLEAR("");

  HEADER("","NCOO",()=>{});
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});