import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products }
  };
};

export default function Home({ products }) {
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
        <ul>
          {products.map((product) => {
            return (
              <li className="m-5 border-dotted border-2 p-5 flex flex-col">
                <h3 className="underline mb-3">{product.title}</h3>
                <h4 className="mb-3">Price: {product.price}$</h4>
                <p className="mb-3">Description: {product.description}</p>
                <div className="h-20% w-50%">
                  <Image
                    src="https://picsum.photos/200/300/"
                    alt={product.title}
                    height={300}
                    width={200}
                  />
                </div>

                <Link href={`products/${product.id}`} key={product.id}>
                  <button className=" cursor-pointer h-[30px] border-2">
                    See details
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
