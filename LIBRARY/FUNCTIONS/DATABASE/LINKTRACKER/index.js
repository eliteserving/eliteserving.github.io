export const LINKTRACKER = (PAGES, CALLBACK) => {
  const query = window.location.search.slice(1);

  if (query && PAGES[query]) {
    PAGES[query]();
  } else {
    CALLBACK();
  }
};

/*

  const LOADDATA={
    home: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    contactus: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    profile: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    saved: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
    catergories: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
  }

  LINKTRACKER(LOADDATA,()=>{

    SHYLANSIRAJANDROIDSTARTPAGE();

  });

*/