import React from "react";
import { Product } from "../component/productList/product";
import { ProductReview } from "../component/productReview/review";
// import { clientSideFunction } from "../utils/clients-utlis";

const Page = () => {
    // const result = clientSideFunction();
    return (
        <>
            This is Profile page
            <div>
                <Product >
                    <ProductReview/>
                </Product>
            </div>
            {/* <h1>{result}</h1> */}
        </>
    )
}

export default Page