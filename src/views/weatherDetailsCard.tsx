import { useEffect, useState } from "react";
import useWeatherContext from "../context-api/weatherDataContext";
import Card from '../components/ui/card'
import SunCondation from "../components/ui/sunCondation";
import CurrentWeatherCondition from "../components/currentWeatherCondition";
import TodayWeatherInfo from "../components/todayWeatherInfo";
import useThemeMode from "../hooks/useThemeMode";

export default function WeatherDetailsCard({className}:{className: string}) {
    const [todayForecast, setTodayForecast] = useState<any>({})
    const {weatherDetails, weatherForecast} = useWeatherContext();
    const [themeMode, handleToggleThemeMode] = useThemeMode()

    useEffect(() => {
        const todayForecast = weatherForecast
        if (todayForecast && todayForecast.length > 0) {
            setTodayForecast(todayForecast[0].astro)
        }
        handleToggleThemeMode(weatherDetails?.is_day === 1 ? 'light' : 'dark')
    }, [weatherForecast, weatherDetails])

    return (
        <Card className={className} bodyClass="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 h-full max-w-4xl m-auto">
            <div className="flex justify-center items-center md:items-start flex-col gap-7">
                <div className="text-center md:text-left">
                    <h4 className="text-5xl xl:text-6xl font-bold text-gray-800 dark:text-gray-100">{weatherDetails.temp_c}°<span>C</span></h4>
                    <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Feels Like: {weatherDetails.feelslike_c}°<span>C</span></h5>
                </div>
                <div className="flex justify-between max-sm:flex-col max-md:flex-row flex-col gap-y-2 gap-x-5">
                    <SunCondation type='sunrise' time={todayForecast?.sunrise} />
                    <SunCondation type='sunset' time={todayForecast?.sunset} />
                </div>
            </div>
            <CurrentWeatherCondition currentWeather={weatherDetails} />
            <TodayWeatherInfo weatherInfo={weatherDetails} />
        </Card>
    )
}
