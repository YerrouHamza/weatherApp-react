import { createContext, useContext, useState } from "react";

type LoaderContextType = {
    isLoading: boolean,
    setIsLoading: (value: boolean) => void
}

export const LoaderOverlayContext = createContext<LoaderContextType | null>(null)


export const LoaderOverlayProvider = ({children}: {children: React.ReactNode}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <LoaderOverlayContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </LoaderOverlayContext.Provider>
    )
}