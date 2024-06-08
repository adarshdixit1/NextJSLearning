<<<<<<< HEAD
// components/MyComponent.tsx
'use client'
import React from 'react';
import { useTheme } from './ContextTheme/theme-provider'; // Adjust path as needed

const MyComponent = () => {
    const theme = useTheme();

    return (
        <div>
            <p style={{color:theme?.colors?.primary}}>Primary Color Text</p>
            <p>Secondary Color Text</p>
        </div>
    );
};

export default MyComponent;
=======
import React from "react";

const Page =()=>{
    return(
        <>This is default page</>
    )
}

export default Page
>>>>>>> main
