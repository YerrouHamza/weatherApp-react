import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { WeatherDataProvider } from './context-api/weatherDataContext'
import './styles/global.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <WeatherDataProvider>
      <App />
    </WeatherDataProvider>
  </StrictMode>,
)
