import WeatherDetailsCard from './weatherDetailsCard'
import WeatherLocationCard from './weatherLocationCard'
import ControlsBar from './controlsBar'
import WeatherForecastDays from './weatherForecastDays'
import WeatherForecastHourly from './weatherForecastHourly'

export default function WeatherPage() {
  return (
    <section className="max-w-screen-xl mx-auto py-10 px-4 space-y-16">
        <ControlsBar />
        <div className="grid grid-cols-7 h-[70%] gap-5">
          <WeatherLocationCard className='col-span-full lg:col-span-2 xl:col-span-3' />
          <WeatherDetailsCard className='col-span-full lg:col-span-5 xl:col-span-4' />
          <WeatherForecastDays className='col-span-full md:col-span-3 lg:col-span-2' />
          <WeatherForecastHourly className='col-span-full md:col-span-4 lg:col-span-5' />
        </div>
    </section>
  )
}
