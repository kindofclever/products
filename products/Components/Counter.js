import { useEffect, useState } from "react"
import { db } from "../firebase";
import {addDoc, collection, updateDoc, doc} from 'firebase/firestore'

export default function Counter ({id}){

    const [count, SetCount] = useState(0);
    const counterCollectionRef = collection(db, 'counter')

    if (count < 0){
        SetCount(0);
    } 
     
    useEffect (async() => {     
        
        const newCount = {count: count} 
        const countDoc = doc(db, 'counter', id)
        console.log(countDoc)
        if (countDoc){
            await updateDoc ( countDoc,newCount )
        }
        else{        
        await addDoc (counterCollectionRef, {id: id , count:count} )
        }
        },[count])
        
    return(
        <div>
            <button onClick={()=> SetCount(count + 1) } > + </button>
            <p> {count}</p>
            <button onClick={()=> SetCount(count - 1)}> - </button>   
        </div>
    )
}


