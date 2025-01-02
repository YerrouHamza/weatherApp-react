import { createContext, useEffect, useState } from "react";
import api from "../../api";

type WeatherContextType = {
    weather: object,
    setCity: (value: string) => void
}

export const WeatherData = createContext<WeatherContextType | null>(null)


export const WeatherDataProvider = ({children}: {children: React.ReactNode}) => {
    const [weather, setData] = useState<object>({})
    const [city, setCity] = useState<string>('london')

    useEffect(() => {
        api.get(`forecast.json?aqi=yes&days=8&q=${city}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                throw new Error('Error while request the data from API')
            })
    }, [city])

    return (
        <WeatherData.Provider value={{weather, setCity}}>
            {children}
        </WeatherData.Provider>
    )
}
