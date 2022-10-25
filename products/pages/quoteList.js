/* eslint-disable react/jsx-key */
import Head from "next/head";
import { useState, useEffect } from "react";
import Counter from "../Components/Counter";

export default function QuoteList() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.chucknorris.io/jokes/search?query=hand";
      const response = await fetch(url);
      const quotesList = await response.json();
      setQuotes(quotesList.result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
   <div>
     <h1>Quotes</h1>
     <ul>
          {quotes.map((quote) => {
            return (<li>{quote.value} </li>);
          })}
        </ul>
   </div>
  );
}