'use client'
import React, { useEffect } from "react";

const ErrorPage = ({ error }: { error: Error }) => {

    useEffect(() => {
        console.log("-error--->", error);
    }, [error])

    return (
        <div style={{ color: "red" }}>Error Handling Page</div>
    )
}

export default ErrorPage