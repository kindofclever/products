/* eslint-disable react/jsx-key */
import Head from "next/head";
import { useState, useEffect } from "react";
import Counter from "../Components/Counter";
import { db } from "../firebase";
import {addDoc, collection, doc, getDocs, setDoc, Timestamp} from 'firebase/firestore'

export default function QuoteList() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.chucknorris.io/jokes/search?query=cats";
      const response = await fetch(url);
      const quotesList = await response.json();
      const counterCollection = collection(db, 'count')
    
      setData(quotesList.result);
      setLoading(false);
      
    }
    fetchData();
  }, []);

  return (
   <div>
     <h1>Quotes</h1>
     <ul>
          {data.map((data) => {
            return (<li>{data.value}
            <Counter id = {data.id} />
              </li>);
          })}
        </ul>
   </div>
  );
}