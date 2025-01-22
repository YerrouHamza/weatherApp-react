import { useState } from "react"

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(error) {
            console.error(`Found Error while check the ${key} in localStorage`, error);
            return initialValue;
        }
    })

    const setValue = (value: T) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))

            setStoredValue(value)
        } catch (error) {
            console.error(`Error while Stored ${value}`);
        }
    }

    return [storedValue, setValue];
}