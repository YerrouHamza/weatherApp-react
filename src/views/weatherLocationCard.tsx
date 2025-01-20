import moment from "moment";
import useWeatherContext from "../context-api/weatherDataContext";
import Card from '../components/ui/card'

export default function WeatherLocationCard({className}:{className: string}) {
    const {weatherLocation} = useWeatherContext();

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
