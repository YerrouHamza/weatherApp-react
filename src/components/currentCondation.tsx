import { useContext, useEffect, useState } from 'react';
import { WeatherData } from '../context-api/weatherDataContext';
import WeatherIconComponent from './ui/weatherIcon';

export default function CurrentCondation() {
  const [currentCondation, setCurrentCondation] = useState<any>({})
  const context = useContext(WeatherData)
  if(!context) throw new Error('The Data form weather context not work')
  const {weatherDetails} = context

  useEffect(() => {
    setCurrentCondation(weatherDetails?.condition)
  }, [weatherDetails])

  return (  
    <div className='flex flex-col justify-center items-center gap-8'>
        <WeatherIconComponent 
          code={currentCondation?.code}
          size='lg'
          time={weatherDetails?.last_updated}
        />
        <h4 className='text-2xl font-semibold text-gray-800'>{currentCondation?.text}</h4>
    </div>
  )
}
