import React from "react";
import Link from "next/link";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const paths = products.map((product) => {
    return { params: { id: product.id.toString() } };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return {
    props: { product }
  };
};

const ProductDetails = ({ product }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-3 p-3">
        <h2 className="mb-5">{product.title}</h2>
        <div>
          <p className="mb-5">Description: {product.description}</p>
          <p className="mb-5">Price: {product.price}</p>
          <p>Category: {product.category}</p>
        </div>
        <Link href="/">
          <BsArrowLeftCircleFill
            size={30}
            className="mt-10 hover:text-[#cd726e] cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
