import React from "react"
import moment from "moment"
import WeatherIconComponent from './weatherIcon'


export default React.memo(function ForecastDay ({code, temp, date}: {
    code: number,
    temp: number,
    date: string
}) {
    return (
        <div className="grid grid-cols-5 items-center gap-4">
            <WeatherIconComponent code={code} size='sm' />
            <p className="text-lg text-gray-700 font-semibold text-center">{temp}°C</p>
            <p className="text-lg text-gray-700 font-medium col-span-3 text-right">{moment(date).format('dddd, d MMM')}</p>
        </div>
    )
})