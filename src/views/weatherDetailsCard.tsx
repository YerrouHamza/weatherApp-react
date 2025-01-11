import { useContext, useEffect, useState } from "react";
import { WeatherData } from "../context-api/weatherDataContext";
import Card from '../components/ui/card'
import SunCondation from "../components/ui/sunCondation";
import CurrentWeatherCondation from "../components/currentWeatherCondation";
import TodayWeatherInfo from "../components/todayWeatherInfo";

export default function WeatherDetailsCard({className}:{className: string}) {
    const [todayForecast, setTodayForecast] = useState<any>({})
    const context = useContext(WeatherData)
    if(!context) throw new Error('The Data form weather context not work')
    const {weatherDetails, weatherForecast} = context

    useEffect(() => {
        const todayForecast = weatherForecast
        if (todayForecast && todayForecast.length > 0) {
            setTodayForecast(todayForecast[0].astro)
        }
    }, [weatherForecast])


    return (
        <Card className={className} bodyClass="grid grid-cols-3 gap-5 h-full">
            <div className="flex justify-center flex-col gap-7">
                <div>
                    <h4 className="text-6xl font-bold text-gray-800">{weatherDetails.temp_c}°<span>C</span></h4>
                    <h5 className="text-xl font-semibold text-gray-700">Feels Like: {weatherDetails.feelslike_c}°<span>C</span></h5>
                </div>
                <div className="space-y-2">
                    <SunCondation type='sunrise' time={todayForecast?.sunrise} />
                    <SunCondation type='sunset' time={todayForecast?.sunset} />
                </div>
            </div>
            <CurrentWeatherCondation />
            <TodayWeatherInfo weatherInfo={weatherDetails} />
        </Card>
    )
}
