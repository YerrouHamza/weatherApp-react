import moment from "moment";
import { useContext } from "react";
import { WeatherData } from "../context-api/weatherDataContext";
import Card from './ui/card'
import { cn } from "../lib/utils";

export default function WeatherLocationCard({className}:{className: string}) {
    const context = useContext(WeatherData)
    if(!context) throw new Error('The Data form weather context not work')
    const {weatherLocation} = context

    return (
        <Card className={className} bodyClass="flex flex-col justify-center items-center h-full">
            <h2 className="text-4xl mb-10">{weatherLocation.name}</h2>
            <div className="text-center">
                <div className="text-8xl font-bold">{moment(weatherLocation.localtime).format('hh:mm')}</div>
                <div className="text-2xl">{moment(weatherLocation.localtime).format('dddd, DD MMM yyyy')}</div>
            </div>
        </Card>
    )
}
