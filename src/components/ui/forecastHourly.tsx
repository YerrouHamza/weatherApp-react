import moment from "moment"
import Card from "./card"
import WeatherIconComponent from './weatherIcon'

export default function ForecastHourly ({code, temp, downTemp, date}: {
    code: number,
    temp: number,
    downTemp: number,
    date: string
}) {
    return (
        <Card className="w-fit rounded-2xl min-w-[100px]" bodyClass="flex justify-center items-center flex-col gap-3">
            <p className="text-md text-gray-700 font-semibold col-span-3 text-right">{moment(date).format('hh:mm')}</p>
            <WeatherIconComponent code={code} time={date} size='sm' />
            <div>
              <p className="text-sm text-gray-700 font-semibold text-center">{temp}°C</p>
              <p className="text-sm text-gray-500 font-semibold text-center">{downTemp}°C</p>
            </div>
        </Card>
    )
}