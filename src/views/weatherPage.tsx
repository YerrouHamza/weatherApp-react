import WeatherDetailsCard from './weatherDetailsCard'
import WeatherLocationCard from './weatherLocationCard'
import ControlsBar from './controlsBar'
import WeatherForecastDays from './weatherForecastDays'

export default function WeatherPage() {
  return (
    <section className="max-w-screen-xl mx-auto py-10 px-4 space-y-12 h-screen">
        <ControlsBar />
        <div className="grid grid-cols-7 grid-rows-2 h-[70%] gap-5">
          <WeatherLocationCard className='col-span-3' />
          <WeatherDetailsCard className='col-span-4' />
          <WeatherForecastDays className='col-span-2' />
          <WeatherLocationCard className='col-span-5' />
        </div>
    </section>
  )
}
