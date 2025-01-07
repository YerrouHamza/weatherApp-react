import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { WeatherData } from "../context-api/weatherDataContext";
import Card from "../components/ui/card";
import WeatherIconComponent from '../components/ui/weatherIcon'

export default function WeatherForecastDays({className}: {className: string}) {
    const context = useContext(WeatherData)
    if(!context) throw new Error('Error while get the weather data');
    const {weatherForecast} = context

    console.log('forcast', weatherForecast);
    
    return (
        <Card className={className} bodyClass="text-center">
            <h2 className="text-3xl font-semibold text-gray-600 mb-10">5 Days Forcasts</h2>
            <div className="flex flex-col gap-4">
                {Array(weatherForecast).length > 0 && weatherForecast?.map((item: any) => {
                    const dayData = item?.day
                    return (
                        <ForecastDay 
                            key={item.date}
                            code={dayData?.condition?.code}
                            temp={dayData.avgtemp_c}
                            date={item.date}
                        />
                    )
                })}
            </div>
        </Card>
    )
}


const ForecastDay = ({code, temp, date}: {
    code: number,
    temp: number,
    date: string
}) => {
    return (
        <div className="grid grid-cols-5 items-center gap-4">
            <WeatherIconComponent code={code} size='sm' />
            <p className="text-lg text-gray-700 font-semibold text-center">{temp}°C</p>
            <p className="text-lg text-gray-700 font-medium col-span-3 text-right">{moment(date).format('dddd, d MMM')}</p>
        </div>
    )
}
