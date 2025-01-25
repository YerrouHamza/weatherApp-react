import useWeatherContext from '../context-api/weatherDataContext';
import useLoader from '../hooks/useLoader';
import Button from './ui/button'


export default function GetCurrentCity() {
  const { stopLoader, setIsLoading } = useLoader()
  const {fetchCity} = useWeatherContext();
  
  const handelGetCurrentCity = async () => {   
    if(!navigator.geolocation) {
      return console.error('Geolocation is not supported by your browser');
    }
    
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        const currentLocation = `${latitude},${longitude}`;
        fetchCity(currentLocation)
        stopLoader();
      },
      (error) => {
        stopLoader();
        console.error('Error while getting the current location', error)
      }
    )
  }

  return (
    <Button variant="primary" className="text-sm w-full md:w-fit" onClick={handelGetCurrentCity}>
        Use current location
    </Button>
  )
}
