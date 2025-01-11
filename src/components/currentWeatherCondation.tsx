import WeatherIconComponent from './ui/weatherIcon';

export default function CurrentWeatherCondation({currentWeather}:{currentWeather: any}) {
  const condation = currentWeather?.condation

  return (
    <div className='flex flex-col justify-center items-center gap-8'>
        <WeatherIconComponent 
          code={condation?.code}
          isDay={currentWeather?.is_day}
          size='lg'
        />
        <h4 className='text-2xl font-semibold text-gray-800'>{condation?.text}</h4>
    </div>
  )
}
