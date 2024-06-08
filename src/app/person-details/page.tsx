import { cookies } from "next/headers"
import { Suspense } from "react";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer"

const Page = () => {
    const cookiesStores = cookies();
    const theme = cookiesStores.get("theme");
    console.log("theme---->", theme);
    return (
        <>
            <Suspense fallback={<p>Loading the Navbar</p>}>
                <Navbar />
            </Suspense>
            <h3>This is person details</h3>
            <Suspense fallback={<p>Loading the Footer</p>}>
                <Footer />
            </Suspense>
        </>
    )
}

export default Page 