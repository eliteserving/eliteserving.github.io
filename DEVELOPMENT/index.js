const MOBILEVIEW=()=>{

  CLEAR("");

  DISPLAY("",`

    <h1>Test</h1>
    
  `);
  
};

const DESKTOPVIEW=()=>{


};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});