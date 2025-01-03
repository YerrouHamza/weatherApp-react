import { createContext, useEffect, useState } from "react";
import api from "../../api";

type WeatherContextType = {
    weatherDetails: any,
    weatherForecast: any,
    weatherLocation: any,
    setCity: (value: string) => void
}

export const WeatherData = createContext<WeatherContextType | null>(null)

export const WeatherDataProvider = ({children}: {children: React.ReactNode}) => {
    const [weatherDetails, setWeatherDetails] = useState<object>({})
    const [weatherForecast, setWeatherForecast] = useState<object>({})
    const [weatherLocation, setWeatherLocation] = useState<object>({})
    const [city, setCity] = useState<string>('london')

    useEffect(() => {
        api.get(`forecast.json?aqi=yes&days=8&q=${city}`)
            .then((res) => {
                const data = res?.data
                setWeatherDetails(data?.current)
                setWeatherForecast(data.forecast)
                setWeatherLocation(data.location)
            })
            .catch((error) => {
                throw new Error('Error while request the data from API')
            })
    }, [city])

    return (
        <WeatherData.Provider value={{weatherDetails, weatherForecast, weatherLocation, setCity}}>
            {children}
        </WeatherData.Provider>
    )
}
