'use client'

import React from "react"

export const Product = async ({ children }: { children: React.ReactNode }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return (
        <h1>
            This Product List Components
            <div>this is server component <br></br>
            {children}
            </div>
        </h1>
    )
}