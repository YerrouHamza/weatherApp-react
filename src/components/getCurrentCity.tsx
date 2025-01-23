import useWeatherContext from '../context-api/weatherDataContext';
import useLoader from '../context-api/loaderOverlayContext';
import Button from './ui/button'


export default function GetCurrentCity() {
  const { setIsLoading } = useLoader()
  const {fetchCity} = useWeatherContext();
  
  const handelGetCurrentCity = async () => {   
    if(!navigator.geolocation) {
      setIsLoading(false)
      return console.error('Geolocation is not supported by your browser');
    }
    
    navigator.geolocation.getCurrentPosition((position) => {
      setIsLoading(true)
      try {
        const {latitude, longitude} = position.coords;
        const currentLocation = `${latitude},${longitude}`;
        fetchCity(currentLocation)
      } catch (error) {
        setIsLoading(false)
        console.error('Error while getting the current location', error)
      }
    });
  }

  return (
    <Button variant="primary" className="text-sm w-full md:w-fit" onClick={handelGetCurrentCity}>
        Use current location
    </Button>
  )
}
