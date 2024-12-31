import ControlsBar from './controlsBar'
import WeatherDetails from './weatherDetails'

export default function WeatherPage() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
        <ControlsBar />
        <WeatherDetails />
    </div>
  )
}
