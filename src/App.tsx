import ControlsBar from "./views/controlsBar"
import WeatherDetails from "./views/weatherDetails"

function App() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-screen-xl mx-auto">
        <ControlsBar />

        <WeatherDetails />
      </div>
    </main>
  )
}

export default App
