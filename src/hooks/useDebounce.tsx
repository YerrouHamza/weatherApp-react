import { useEffect, useState } from "react"


export default function useDebounce(value: string) {
    const [debouncedValue, setDebouncedValue] = useState<string>('')

    useEffect(() => {
        const debounsTimer = setTimeout(() => {
            setDebouncedValue(value);
        }, 500)

        return (() => clearTimeout(debounsTimer))
    }, [debouncedValue, value])
  
    return [debouncedValue] as const
}
