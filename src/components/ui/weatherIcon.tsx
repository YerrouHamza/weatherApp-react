import React from "react"
import WeatherStatus from "../../lib/weatherIconsStatus"
import { cn } from "../../lib/utils"

type conditionIcon = {
    code: number
    className?: string,
    isDay?: number,
    size: 'sm' | 'md' | "lg"
}

export default React.memo(function WeatherIconComponent({code, isDay, size, className}: conditionIcon) {
    const IconSize = {
        sm: 'w-8',
        md: 'w-16',
        lg: 'w-44'
    }
    const iconWeatherProps = {className: cn(IconSize[size], className), alt: "Warther Icon"}

    if ([1003, 1006, 1009].includes(code)) {
        return <img src={WeatherStatus.Cloudy} {...iconWeatherProps} />
    } else if (
        [1063, 1183, 1186, 1189, 1192, 1195].includes(code)
    ) {
        return <img src={WeatherStatus.Rainy} {...iconWeatherProps} />
    } else if ([1117, 1204, 1210, 1216].includes(code)) {
        return <img src={WeatherStatus.WindSunny} {...iconWeatherProps} />
    }

    return <img src={isDay === 0 ? WeatherStatus.Moon : WeatherStatus.Sunny} {...iconWeatherProps} />
})
