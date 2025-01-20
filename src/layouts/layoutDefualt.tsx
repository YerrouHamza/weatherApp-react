import React from "react";
import LoaderOverlay from "../components/ui/loaderOverlay";
import useLoader from "../context-api/loaderOverlayContext";

export default function LayoutDefualt({children}: {children: React.ReactNode}) {
    const {isLoading} = useLoader()
    
    return (
        <main className="font-poppins min-h-screen bg-gradient-to-tr from-yellow-100 to-blue-400 transition-all">
            {isLoading && <LoaderOverlay />}
            {children}
        </main>
    )
}
