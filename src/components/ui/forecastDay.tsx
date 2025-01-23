import React from "react"
import moment from "moment"
import WeatherIconComponent from './weatherIcon'


export default React.memo(function ForecastDay ({code, temp, date}: {
    code: number,
    temp: number,
    date: string
}) {
    return (
        <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
                <WeatherIconComponent code={code} size='sm' />
                <p className="text-sm xl:text-lg text-gray-700 dark:text-gray-100 font-semibold text-center">{temp}°C</p>
            </div>
            <p className="text-sm xl:text-lg text-gray-700 dark:text-gray-100 font-medium col-span-3 text-right">{moment(date).format('dddd, d MMM')}</p>
        </div>
    )
})