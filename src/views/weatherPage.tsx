import WeatherLocationCard from '../components/weatherLocationCard'
import ControlsBar from './controlsBar'

export default function WeatherPage() {
  return (
    <section className="max-w-screen-xl mx-auto py-10 px-4 space-y-12 h-screen">
        <ControlsBar />
        <div className="grid grid-cols-5 grid-rows-2 h-[70%]">
          <WeatherLocationCard className='col-span-2' />
        </div>
    </section>
  )
}
