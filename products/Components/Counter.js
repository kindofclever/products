import { useEffect, useState } from "react"
import { db } from "../firebase";
import {addDoc, collection, setDoc, updateDoc, doc, Firestore, getDoc, where,query} from 'firebase/firestore'

export default function Counter ({id}){

    const [count, SetCount] = useState();
    const counterCollection = collection(db, 'count')
    
    useEffect (() => {
        const getCount = async () =>{
            const docRef=( doc(counterCollection, id))
        try{
            const curDoc = await getDoc(docRef)
            if(curDoc.exists()){
                console.log('document:' , curDoc.data().count)
                SetCount(curDoc.data().count)
            } else {
                console.log('No document with provided id', id)
            }
        }
        catch(error){
            console.log(error)
        }   
        }
        getCount();
    }, [])
     useEffect (() => {       
            console.log(count)
            async function updateCount(){     
                setDoc(doc(counterCollection, id), {count: count})}
            updateCount();
        },[count])

    return(
        <div>
            <button onClick={()=> SetCount(count + 1) } > + </button>
            <p> {count}</p>
            <button onClick={()=> SetCount(count - 1)}> - </button>   
        </div>
    )
}


