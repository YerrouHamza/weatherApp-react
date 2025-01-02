import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'
import { WeatherDataProvider } from './context-api/weatherDataContext'
import { LoaderOverlayProvider } from './context-api/loaderOverlayContext'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LoaderOverlayProvider>
      <WeatherDataProvider>
        <App />
      </WeatherDataProvider>
    </LoaderOverlayProvider>
  </StrictMode>,
)
