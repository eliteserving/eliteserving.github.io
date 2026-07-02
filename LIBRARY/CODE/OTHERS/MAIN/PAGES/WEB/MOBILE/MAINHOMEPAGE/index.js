export const WEBMOBILEMAINHOMEPAGE=()=>{

    DISPLAY("",`

        <h1 class="Titles">Home Page</h1>
        
    `);

    const CSSDATA=`

        .Titles{
            color:red;
        }
    
    `;

    INJECTCSS(CSSDATA);

};