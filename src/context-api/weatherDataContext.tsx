import { createContext, useEffect, useState } from "react";
import api from "../../api";


const WeatherData = createContext({})


export const WeatherDataProvider = ({children}: {children: React.ReactNode}) => {
    const [data, setData] = useState({})
    const [city, setCity] = useState('london')

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
        <WeatherData.Provider value={[data, setCity]}>
            {children}
        </WeatherData.Provider>
    )
}
