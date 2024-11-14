// import React from "react";
// import { useParams } from "react-router-dom";
// import ProductHd from "../components/ProductHd";
// import all_products from "../assets/all_products";
// import ProductDisplay from "../components/ProductDisplay";
// import ProductDescription from "../components/ProductDescription";
// import PopularProducts from "../components/PopularProducts";

// const Product = () =>{

//     const { productId } = useParams();
//     console.log("productId: ", productId);

//     const product = all_products.find((e)=> e.id === Number(productId));
//     if(!product) {
//         return <div>Product not found!</div>
//         //or redirect the user to a 404 page
//     }

//     return (
//         <section>
//             <div>
//                 <ProductHd  product={product}/>
//                 <ProductDisplay product={product} />
//                 <ProductDescription />
//                 <PopularProducts />
//             </div>
//         </section>
//     )
// }

// export default Product


// -------------------------------



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import PopularProducts from "../components/PopularProducts";

const Product = () => {
    const { productId } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null); // State to store the current product
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to handle errors

    // Fetch all products from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:4000/allproducts");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                // Find the product by matching the productId
                const foundProduct = data.find((e) => e.id === Number(productId));
                if (!foundProduct) {
                    setError("Product not found");
                } else {
                    setProduct(foundProduct);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section>
            <div>
                <ProductHd product={product} />
                <ProductDisplay product={product} />
                <ProductDescription description={product.description} />
                <PopularProducts />
            </div>
        </section>
    );
};

export default Product;
