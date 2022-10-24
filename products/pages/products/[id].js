import Head from "next/head";
import Image from "next/image";
import { products } from "../../data/data.js";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";

const product = () => {
	const router = useRouter();
	var { id } = router.query;
    console.log(id)
    if (!id){
        return 
        <></>;
    }
    var product = products.find((element) => (element.id = id));  
        return (
            <ul > 
                <ul>{id}</ul>               
                <ul> {product.title} </ul>
                <ul> Price: {product.price} </ul>
                <ul> Description: {product.description}</ul>
            </ul>
        );
    }


export default product;
