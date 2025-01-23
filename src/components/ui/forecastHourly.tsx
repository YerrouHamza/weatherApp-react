import moment from "moment"
import Card from "./card"
import WeatherIconComponent from './weatherIcon'

export default function ForecastHourly ({code, temp, downTemp, date, isDay}: {
    code: number,
    temp: number,
    downTemp: number,
    date: string,
    isDay?: number
}) {
    return (
        <Card className="w-fit rounded-2xl min-w-[100px] dark:bg-opacity-15 dark:bg-gray-50" bodyClass="flex justify-center items-center flex-col gap-3">
            <p className="text-sm text-gray-700 dark:text-gray-50 font-semibold col-span-3 text-right">{moment(date).format('hh:mm a')}</p>
            <WeatherIconComponent code={code} isDay={isDay} size='sm' />
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-50 font-semibold text-center">{temp}°C</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 font-semibold text-center">{downTemp}°C</p>
            </div>
        </Card>
    )
}