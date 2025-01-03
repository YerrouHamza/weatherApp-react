import React, { useContext } from "react";
import LoaderOverlay from "../components/ui/loaderOverlay";
import { LoaderOverlayContext } from "../context-api/loaderOverlayContext";

export default function LayoutDefualt({children}: {children: React.ReactNode}) {
    const context = useContext(LoaderOverlayContext);
    if(!context) throw console.log('error will fetching the loader context');
    const {isLoading} = context;
    
    return (
        <main className="min-h-screen bg-gradient-to-tr from-yellow-100 to-blue-400 transition-all">
            {isLoading && <LoaderOverlay />}
            {children}
        </main>
    )
}
