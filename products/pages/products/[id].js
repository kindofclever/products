import Head from "next/head";
import Image from "next/image";
import { products } from "../../data/data.js";
import { useRouter } from "next/router.js";

const product = () => {
	const router = useRouter()
	const { id } = router.query
    const product = products.find(element => element.id = id)
    console.log(product, id)
return (

	<></>
)
	
}

export default product;
