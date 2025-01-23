import WeatherIconComponent from './ui/weatherIcon';

export default function CurrentWeatherCondition({currentWeather}:{currentWeather: any}) {
  const condition = currentWeather?.condition

  return (
    <div className='flex flex-col justify-center items-center gap-5 md:gap-8'>
        <WeatherIconComponent 
          code={condition?.code}
          isDay={currentWeather?.is_day}
          size='lg'
        />
        <h4 className='text-2xl font-semibold text-gray-800 dark:text-gray-100'>{condition?.text}</h4>
    </div>
  )
}
