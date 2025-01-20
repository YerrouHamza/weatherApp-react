import { createContext, useEffect, useState } from "react";
import useLoader from "./loaderOverlayContext";
import api from "../../api";

type WeatherContextType = {
    weatherDetails: any,
    weatherForecast: any[],
    weatherLocation: any,
    fetchCity: (value?: string) => void
}

export const WeatherData = createContext<WeatherContextType | null>(null)

export const WeatherDataProvider = ({children}: {children: React.ReactNode}) => {
    const [weatherDetails, setWeatherDetails] = useState<object>({})
    const [weatherForecast, setWeatherForecast] = useState<object[]>([])
    const [weatherLocation, setWeatherLocation] = useState<object>({})
    const {setIsLoading} = useLoader()

    const fetchCity = async (city?: string) => {
        setIsLoading(true)

        await api.get(`forecast.json?aqi=yes&days=8&q=${city || 'london'}`)
            .then((res) => {
                const data = res?.data
                setWeatherDetails(data?.current)
                setWeatherForecast(data.forecast?.forecastday)
                setWeatherLocation(data.location)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                throw new Error('Error while request the data from API', error)
            })
    }

    useEffect(() => {
        fetchCity()
    }, [])

    return (
        <WeatherData.Provider value={{weatherDetails, weatherForecast, weatherLocation, fetchCity}}>
            {children}
        </WeatherData.Provider>
    )
}
