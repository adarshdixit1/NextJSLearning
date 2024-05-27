import React from "react";
import { Box } from "@mui/material";

const Page=({params}:any)=>{
    return(
        <Box>
            <h1>
                This is user detail page {params?.id}
            </h1>
        </Box>
    )
}

export default Page