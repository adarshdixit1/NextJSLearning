import React from "react";

const Page = async () => {
await new Promise((resolve)=>setTimeout(resolve, 4000))
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users123")
    const user = await reponse.json();
    // console.log("===>",user);
    return (
        <>
            {user.map((user: any) =>
            (<div>
                <h3>{user?.name}</h3>
                <h4>{user?.phone}</h4>
            </div>)
            )}
        </>
    )
}

export default Page