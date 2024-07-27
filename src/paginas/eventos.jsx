
import { useState } from "react";

function Eventos(){
    const [info, setInfo] = useState('Click no realizado')

    const manejaClick=()=>{
        setInfo('click realizado')
        console.log(info)
    }

    return(
        <div>
            <button onClick={manejaClick}>Click</button>
        </div>
    )
}

export default Eventos;