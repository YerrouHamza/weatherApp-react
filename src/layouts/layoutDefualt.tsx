import React from "react";
import LoaderOverlay from "../components/ui/loaderOverlay";
import useLoader from "../context-api/loaderOverlayContext";

export default function LayoutDefualt({children}: {children: React.ReactNode}) {
    const {isLoading} = useLoader()
    
    return (
        <main 
            className="font-poppins min-h-screen h-full flex justify-center items-center bg-gradient-to-tr transition-all from-yellow-100 to-blue-400 dark:from-indigo-950 dark:to-gray-950"
        >
            {isLoading && <LoaderOverlay />}
            {children}
        </main>
    )
}
