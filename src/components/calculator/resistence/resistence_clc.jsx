import react, { useState } from "react";

export function Resistence_Calc(){
    const {dataU , setDataU} = useState();
    const {dataR , setDataU} = useState();
    const {dataI , setDataU} = useState();
    return(
        <div>
            <div id="updatedate">
                <input id="U" />
                <input id="R" />
                <input id="I" />
            </div>
            <div id="calc">
                {{
                    
                }}
            </div>

        </div>
    )
}