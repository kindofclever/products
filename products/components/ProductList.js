import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li className="m-5 border-dotted border-2 p-5 flex flex-col">
            <h3 className="underline mb-3">{product.title}</h3>
            <h4 className="mb-3">Price: {product.price}$</h4>
            <p className="mb-3">Description: {product.description}</p>
            <p className="mb-3">Suk: {product.id}</p>
            <p className="mb-3">Category: {product.category}</p>
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
  );
};

export default ProductList;
