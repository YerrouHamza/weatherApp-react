import { useContext } from 'react';
import { WeatherData } from '../context-api/weatherDataContext';
import Button from './ui/button'


export default function GetCurrentCity() {
  const context = useContext(WeatherData);
  if (!context) throw new Error("GetCurrentCity must be used within a WeatherDataProvider");

  const {weatherDetails ,setCity} = context;

  console.log(weatherDetails);
  
  const handelGetCurrentCity = async () => {
    setCity('tetouan')
  }

  return (
    <Button variant="primary" className="text-sm" onClick={handelGetCurrentCity}>
        Use current location
    </Button>
  )
}
