import React from "react";
import useWeatherContext from "../context-api/weatherDataContext";
import Card from "../components/ui/card";
import ForecastDay from "../components/ui/forecastDay";

export default React.memo(function WeatherForecastDays({className}: {className: string}) {
    const {weatherForecast} = useWeatherContext();
    
    return (
        <Card className={className} bodyClass="text-center">
            <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-100 mb-9 mt-3">Next Days Forecasts</h2>
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
