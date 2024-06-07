import React from "react";

const Page = ({params}:any)=>{
    if(params?.user >100){
        throw new Error("Number of user is larger")
    }else{

        return(
            <>
            This is user {params.user}
            </>
        )
    }
}

export default Page