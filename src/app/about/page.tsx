import { cookies } from "next/headers"

const Page = () => {
    const cookiesStore:any = cookies()
    const theme:any = cookiesStore.get("theme");
    console.log("---->", theme)
    console.log("---->this is rendering server component")
    return (
        <>
            <h1>About Page</h1>
        </>
    )
}

export default Page