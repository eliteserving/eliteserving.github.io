const MOBILEVIEW=()=>{

  const LOADDATA={
    home: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    contactus: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    profile: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    saved: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    catergories: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
  }

  LINKTRACKER(LOADDATA,()=>{

    WEBMAINSTARTPAGE();

  });
   
};

const DESKTOPVIEW=()=>{

  const LOADDATA={
    home: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    contactus: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    profile: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    saved: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    catergories: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
  }

  LINKTRACKER(LOADDATA,()=>{

    WEBMAINSTARTPAGE();

  });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});