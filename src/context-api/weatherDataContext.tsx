import { createContext, useContext, useEffect, useState } from "react";
import useLoader from "../hooks/useLoader";
import api from "../../api";

type WeatherContextType = {
    weatherDetails: any,
    weatherForecast: any[],
    weatherLocation: any,
    fetchCity: (value?: string) => void
}

const WeatherData = createContext<WeatherContextType | null>(null)

export const WeatherDataProvider = ({children}: {children: React.ReactNode}) => {
    const [weatherDetails, setWeatherDetails] = useState<object>({})
    const [weatherForecast, setWeatherForecast] = useState<object[]>([])
    const [weatherLocation, setWeatherLocation] = useState<object>({})
    const {setIsLoading, stopLoader} = useLoader()

    const fetchCity = async (city?: string) => {
        setIsLoading(true)

        await api.get(`forecast.json?aqi=yes&days=8&q=${city || 'london'}`)
            .then((res) => {
                const data = res?.data
                setWeatherDetails(data?.current)
                setWeatherForecast(data.forecast?.forecastday)
                setWeatherLocation(data.location)
                stopLoader();
            })
            .catch((error) => {
                stopLoader();
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



// create custom hook for the weather contxet to make it easy call and use
export default function useWeatherContext () {
    const weatherContext = useContext(WeatherData)
    if (!weatherContext) throw new Error('Error while getting the weather context')
   
    return weatherContext
}