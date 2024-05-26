import React from "react";
import Link from "next/link";

const UsersData =()=>{
    return(
        <>
        This is user Data
        <Link href={"/complex-dashboard/profile"}>Go To user Profile</Link>
        </>
    )
}

export default UsersData