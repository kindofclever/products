import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/data";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Products | Home</title>
        <meta name="description" content="Next.js" />
        <meta name="keywords" content="products" />
      </Head>
      <header className="flex flex-col justify-center items-center">
        <h1>Products</h1>
      </header>
      <main className="flex flex-col justify-center items-center max-w-[50%]">
        <ul>
          {products.map((product) => {
            return (
              <Link href={`products/${product.title}`}>
                <li className="m-5 cursor-pointer border-dotted border-2 hover:bg-[#492d28]">
                  <h3>{product.title}</h3>
                  <h4>Price: {product.price}$</h4>
                  <p>Description: {product.description}</p>
                  <Image
                    src={product.image}
                    alt={product.title}
                    height={300}
                    width={200}
                  />
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
