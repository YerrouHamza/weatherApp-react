import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { WeatherData } from "../context-api/weatherDataContext";
import Card from './ui/card'
import { IconSunrise, IconSunset } from "@tabler/icons-react";

export default function WeatherDetailsCard({className}:{className: string}) {
    const [todayForecast, setTodayForecast] = useState<any>({})
    const context = useContext(WeatherData)
    if(!context) throw new Error('The Data form weather context not work')
    const {weatherDetails, weatherForecast} = context
    console.log(weatherDetails);

    useEffect(() => {
        const todayForecast = weatherForecast?.forecastday
        
        if (todayForecast && todayForecast.length > 0) {
            console.log(todayForecast[0].astro);
            setTodayForecast(todayForecast[0].astro)
        }
    }, [weatherForecast])


    return (
        <Card className={className} bodyClass="grid grid-cols-3 h-full">
            <div className="flex justify-between flex-col">
                <div className="">
                    <h4 className="text-6xl font-bold text-gray-800">{weatherDetails.temp_c}°<span>C</span></h4>
                    <h5 className="text-xl font-semibold text-gray-700">Feels Like: {weatherDetails.feelslike_c}°<span>C</span></h5>
                </div>
                <div className="">
                    <div className="flex items-center">
                        <IconSunrise className="size-10 font-medium" />
                        <div className="">
                            <h3>Sunrise:</h3>
                            <span className="block text-lg">{todayForecast?.sunrise}</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <IconSunrise className="size-10 font-medium" />
                        <div className="">
                            <h3>Sunrise:</h3>
                            <span className="block text-lg">{todayForecast?.sunrise}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=""></div>
            <div className=""></div>
        </Card>
    )
}
