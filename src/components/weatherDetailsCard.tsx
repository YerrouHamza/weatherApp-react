import { useContext, useEffect, useState } from "react";
import { WeatherData } from "../context-api/weatherDataContext";
import Card from './ui/card'
import SunCondation from "./ui/sunCondation";

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
            <div className="flex justify-center flex-col gap-7">
                <div className="">
                    <h4 className="text-6xl font-bold text-gray-800">{weatherDetails.temp_c}°<span>C</span></h4>
                    <h5 className="text-xl font-semibold text-gray-700">Feels Like: {weatherDetails.feelslike_c}°<span>C</span></h5>
                </div>
                <div className="space-y-2">
                    <SunCondation type='sunrise' time={todayForecast?.sunrise} />
                    <SunCondation type='sunset' time={todayForecast?.sunset} />
                </div>
            </div>
            <div className=""></div>
            <div className=""></div>
        </Card>
    )
}
