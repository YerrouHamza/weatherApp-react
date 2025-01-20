import { createContext, useContext, useState } from "react";

type LoaderContextType = {
    isLoading: boolean,
    setIsLoading: (value: boolean) => void
}

const LoaderOverlayContext = createContext<LoaderContextType | null>(null)


export const LoaderOverlayProvider = ({children}: {children: React.ReactNode}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <LoaderOverlayContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </LoaderOverlayContext.Provider>
    )
}

// custom hook for easy use loader context
export default function useLoader() {
    const loaderContext = useContext(LoaderOverlayContext);
    if (!loaderContext) throw new Error('Error while getting the loader context')

    return loaderContext
}