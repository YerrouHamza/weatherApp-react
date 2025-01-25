import { useContext } from "react";
import { LoaderOverlayContext } from "../context-api/loaderOverlayContext";

// custom hook for easy use loader context
export default function useLoader() {
        const loaderContext = useContext(LoaderOverlayContext);
        if (!loaderContext) throw new Error('Error while getting the loader context')

        const {isLoading, setIsLoading} = loaderContext

        const stopLoader = () => {
            setTimeout(() => {
                setIsLoading(false)
            }, 500)
        }

    return {stopLoader, setIsLoading, isLoading}
}