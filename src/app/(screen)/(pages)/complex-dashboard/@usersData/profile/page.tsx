import React from "react";
import Link from "next/link";

const Profile =()=>{
    return(
        <>
        This is User Profile
        <Link href={"/complex-dashboard"}>Go To udefult</Link>
        </>
    )
}

export default Profile