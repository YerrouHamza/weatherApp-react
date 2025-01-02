import React, { useContext } from "react";
import LoaderOverlay from "../components/ui/loaderOverlay";
import { LoaderOverlayContext } from "../context-api/loaderOverlayContext";

export default function LayoutDefualt({children}: {children: React.ReactNode}) {
    const context = useContext(LoaderOverlayContext);
    if(!context) throw console.log('error will fetching the loader context');
    const {isLoading} = context;
    
    return (
        <main className="min-h-screen bg-slate-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 duration-300 transition-all">
            {isLoading && <LoaderOverlay />}
            {children}
        </main>
    )
}
