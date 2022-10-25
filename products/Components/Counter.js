import { useEffect, useState } from "react"




export default function Counter ({id}){

    const [count, SetCount] = useState(0);
    if (count < 0){
        SetCount(0);
    } 
    
    useEffect () => {
        

    } );
    return(
        <div>
            <button onClick={()=> SetCount(count + 1) } > + </button>
            <p> {count}</p>
            <button onClick={()=> SetCount(count - 1)}> - </button>   
        </div>
    )
}


