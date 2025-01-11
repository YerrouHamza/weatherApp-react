import React, { useContext } from "react";
import { WeatherData } from "../context-api/weatherDataContext";
import Card from "../components/ui/card";
import ForecastDay from "../components/ui/forecastDay";

export default React.memo(function WeatherForecastDays({className}: {className: string}) {
    const context = useContext(WeatherData)
    if(!context) throw new Error('Error while get the weather data');
    const {weatherForecast} = context
    
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
})
