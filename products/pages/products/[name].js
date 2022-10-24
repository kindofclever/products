import React from "react";
import { useRouter } from "next/router";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { products } from "../../data/data";

const ProductDetails = ({}) => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-3">
        <h2>{name}</h2>
      </div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        <BsArrowLeftCircleFill size={30} />
      </button>
    </div>
  );
};

export default ProductDetails;
