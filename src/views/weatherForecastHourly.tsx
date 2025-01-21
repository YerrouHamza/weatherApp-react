import React, { useEffect, useState } from "react";
import moment from "moment";
import useWeatherContext from "../context-api/weatherDataContext";
import Card from "../components/ui/card";
import SliderSwiper from "../components/sliderSwiper";
import ForecastHourly from "../components/ui/forecastHourly";

export default React.memo(function WeatherForecastHourly({className}:{className: string}) {
  const [hourlyForecast, setHourlyForecast] = useState([])
  const {weatherForecast, weatherLocation} = useWeatherContext();

  useEffect(() => {
    const currentDate = moment(weatherLocation.localtime).format('yyyy-MM-DD')
    const currentDayDate = weatherForecast.find(item => item.date === currentDate)
    const nextHourlyData = currentDayDate?.hour.filter((hour: any) => moment(hour.time).isSameOrAfter(moment(weatherLocation.localtime).format('yyyy-MM-DD hh:mm')))
    setHourlyForecast(nextHourlyData)
  }, [weatherForecast, weatherLocation])
  
  return (
      <Card className={className} bodyClass="text-center">
          <h2 className="text-3xl font-semibold text-gray-600 mb-10">Hourly Forcasts</h2>
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
                    isDay={item.is_day}
                  />
                )
              })}
          </SliderSwiper>
      </Card>
  )
})
