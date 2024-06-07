import React from "react";
import { Box } from "@mui/material";
import localData from "./localData";
import Link from "next/link";
import { headers } from "next/headers";

const Page = () => {

    const containerStyle = {
        minWidth:'20vw',
        height:"10vh",
        padding:"5px",
        margin:"5px",
        border:"2px solid black",
        display:"flex",
        justifyContent:"center",
        alignItem:"center"
    }

    return (
        <Box>
            <h1>User Information</h1>
            <Box sx={{display:"flex", gap:"3px", maxWidth:"100vw"}}>
                {
                    localData?.map(({ id, name, location }) => (
                        <Link key={id} href={`/photo-feeds/${id}`} >
                            <Box style={containerStyle}>
                                {name}
                            </Box>
                        </Link>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Page