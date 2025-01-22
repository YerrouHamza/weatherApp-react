import React from "react";
import LoaderOverlay from "../components/ui/loaderOverlay";
import useLoader from "../context-api/loaderOverlayContext";
import useThemeMode from "../hooks/useThemeMode";
import { cn } from "../lib/utils";

export default function LayoutDefualt({children}: {children: React.ReactNode}) {
    const {isLoading} = useLoader()
    const [themeMode] = useThemeMode();
    
    return (
        <main 
            className={cn(
                "font-poppins min-h-screen h-full flex justify-center items-center bg-gradient-to-tr transition-all", 
                themeMode === "light" ? "from-yellow-100 to-blue-400" : "from-indigo-950 to-gray-950"
            )}
        >
            {isLoading && <LoaderOverlay />}
            {children}
        </main>
    )
}
