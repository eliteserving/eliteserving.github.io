export const MJOMBALIWEBMOBILEHOMEPAGE=()=>{
    const CSS=`

        .MjombaLeftText{
            text-align:left;
            margin:auto;
        }

    `;
    DISPLAY("",`

        <header>

            <h1 class="MjombaLeftText">Doctor Mjomba Ali</h1>

        </header>
        
    `);
    INJECTCSS("https://eliteserving.github.io/START/index.css");
    INJECTCSS(CSS);
};