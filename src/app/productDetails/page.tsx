'use client'
import { useTheme } from "../ContextTheme/theme-provider";
import { clientSideFunction } from "../utils/clients-utlis";
// import { Product } from "../component/productList/product";
// import { ProductReview } from "../component/productReview/review";



const ProductDetailPage = () => {
    const theme:any = useTheme();
    const result = clientSideFunction();
    return (
        <div>
            <h1 style={{color:theme?.colors?.primary}}>Product Review Page</h1>
            <div style={{color:theme.colors.secondary, display:"flex", justifyContent:"center"}}>{result}</div>
            {/* <Product />
            <ProductReview /> */}
        </div>
    )
}

export default ProductDetailPage