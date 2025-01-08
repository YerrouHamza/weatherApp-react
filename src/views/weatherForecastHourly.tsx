import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { WeatherData } from "../context-api/weatherDataContext";
import Card from "../components/ui/card";
import SliderSwiper from "../components/sliderSwiper";
import ForecastHourly from "../components/ui/forecastHourly";

export default React.memo(function WeatherForecastHourly({className}:{className: string}) {
    const context = useContext(WeatherData)
    if(!context) throw new Error('Error while get the weather data');
    const {weatherForecast, weatherLocation} = context

    const [hourlyForecast, setHourlyForecast] = useState([])

    useEffect(() => {
      const currentDate = moment(weatherLocation.localtime).format('yyyy-MM-DD')
      const currentDayDate = weatherForecast.find(item => item.date === currentDate)
      const nextHourlyData = currentDayDate?.hour.filter((hour: any) => moment(hour.time).isSameOrAfter(moment(weatherLocation.localtime).format('yyyy-MM-DD hh:mm')))
      setHourlyForecast(nextHourlyData)
    }, [weatherForecast, weatherLocation])
    
    return (
        <Card className={className} bodyClass="text-center">
            <h2 className="text-3xl font-semibold text-gray-600 mb-10">5 Days Forcasts</h2>
            <div className="flex gap-4">
              <SliderSwiper
                spaceBetween={40}
                slidesPerView={7}
                className="py-5"
              >
                {Array(hourlyForecast).length > 0 && hourlyForecast?.map((item: any) => {
                    return (
                      <ForecastHourly
                        key={item.time}
                        code={item?.condition?.code}
                        temp={item.temp_c}
                        downTemp={item.dewpoint_c}
                        date={item.time}
                      />
                    )
                  })}
              </SliderSwiper>
            </div>
        </Card>
    )
})
