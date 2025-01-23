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
    const currentDayDate = weatherForecast.find(item => item?.date === currentDate)
    const nextHourlyData = currentDayDate?.hour.filter((hour: any) => moment(hour.time).isSameOrAfter(moment(weatherLocation.localtime).format('yyyy-MM-DD hh:mm a')))
    
    if(Array(nextHourlyData).length < 10) {
      const nextDayDate = moment(currentDate).add(1, 'days').format('yyyy-MM-DD');
      const nextDayHourlyWither = weatherForecast?.find(item => item?.date === nextDayDate)?.hour?.splice(12);
      const finalHourlyData = [nextHourlyData, nextDayHourlyWither];
      return setHourlyForecast(finalHourlyData?.flat(1) as [])
    }
    setHourlyForecast(nextHourlyData)
  }, [weatherForecast, weatherLocation])
  
  return (
      <Card className={className} bodyClass="text-center">
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-100 mb-5 mt-3">Next Hourly Forecasts</h2>
          <SliderSwiper
            spaceBetween={20}
            slidesPerView={7}
            className="py-5"
          >
            {hourlyForecast?.map((item: any) => {
                return (
                  <ForecastHourly
                    key={item?.time}
                    code={item?.condition?.code}
                    temp={item?.temp_c}
                    downTemp={item?.dewpoint_c}
                    date={item?.time}
                    isDay={item?.is_day}
                  />
                )
              })}
          </SliderSwiper>
      </Card>
  )
})
