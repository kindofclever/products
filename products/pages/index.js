import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ProductList from "../components/ProductList";
import Link from "next/link";
import Filter from "../components/Filter";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products }
  };
};

export default function Home({ products }) {
  const [value, setValue] = useState("all");
  const filterValueSelected = (filterValue) => {
    setValue(filterValue);
  };

  const category = products.filter((product) => {
    if (value === `men's clothing`) {
      return product.category === `men's clothing`;
    } else if (value === `jewelery`) {
      return product.category === `jewelery`;
    } else if (value === `electronics`) {
      return product.category === `electronics`;
    } else if (value === `women's clothing`) {
      return product.category === `women's clothing`;
    } else if (value === `all`) {
      return product;
    } else {
      return;
    }
  });

  return (
    <div className="w-full h-full">
      <Head>
        <title>Products | Home</title>
        <meta name="description" content="Next.js" />
        <meta name="keywords" content="products" />
      </Head>
      <header className="flex flex-col justify-center items-center">
        <h1 className="">Products</h1>
      </header>
      <main className="flex flex-col justify-center items-center max-w-[100%]">
        <Filter products={products} filterValueSelected={filterValueSelected} />
        <ProductList products={category} />
      </main>
    </div>
  );
}
