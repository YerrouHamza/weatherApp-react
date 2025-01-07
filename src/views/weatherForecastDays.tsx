import Card from "../components/ui/card";

export default function WeatherForecastDays({className}: {className: string}) {
  return (
     <Card className={className} bodyClass="text-center">
         <h2 className="text-3xl font-semibold text-gray-700">5 Days Forcasts</h2>
     </Card>
  )
}
