import { useContext } from 'react';
import { WeatherData } from '../context-api/weatherDataContext';
import useLoader from '../context-api/loaderOverlayContext';
import Button from './ui/button'


export default function GetCurrentCity() {
  const wethaerContext = useContext(WeatherData);
  const { setIsLoading } = useLoader()
  if (!wethaerContext) throw new Error("GetCurrentCity must be used within a WeatherDataProvider");
  const {fetchCity} = wethaerContext;
  
  const handelGetCurrentCity = async () => {
    if(!navigator.geolocation) return console.error('Geolocation is not supported by your browser');

    setIsLoading(true)
    
    navigator.geolocation.getCurrentPosition((position) => {
      try {
        const {latitude, longitude} = position.coords;
        const currentLocation = `${latitude},${longitude}`;
        fetchCity(currentLocation)
      } catch (error) {
        console.error('Error while getting the current location', error)
        setIsLoading(false)
      }
    });
  }

  return (
    <Button variant="primary" className="text-sm" onClick={handelGetCurrentCity}>
        Use current location
    </Button>
  )
}
