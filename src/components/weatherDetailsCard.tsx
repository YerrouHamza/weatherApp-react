import moment from "moment";
import { useContext } from "react";
import { WeatherData } from "../context-api/weatherDataContext";
import Card from './ui/card'

export default function WeatherDetailsCard({className}:{className: string}) {
    const context = useContext(WeatherData)
    if(!context) throw new Error('The Data form weather context not work')
    const {weatherLocation} = context

    return (
        <Card className={className} bodyClass="grid grid-cols-3 h-full">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
        </Card>
    )
}
