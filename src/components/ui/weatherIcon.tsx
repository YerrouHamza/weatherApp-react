import React, { useEffect, useState } from "react"
import moment from "moment"
import WeatherStatus from "../../lib/weatherIconsStatus"
import { cn } from "../../lib/utils"

type conditionIcon = {
    isDay?: any,
    code: number
    className?: string,
    size: 'sm' | 'md' | "lg"
}

export default React.memo(function WeatherIconComponent({code, isDay, size, className}: conditionIcon) {
    const [icon, setIcon] = useState<string | null>(null)
    
    useEffect(() => {
        if ([1003, 1006, 1009].includes(code)) {
            return setIcon(WeatherStatus.Cloudy)
        } else if (
            [1063, 1183, 1186, 1189, 1192, 1195].includes(code)
        ) {
            return setIcon(WeatherStatus.Rainy)
        } else if ([1117, 1204, 1210, 1216].includes(code)) {
            return setIcon(WeatherStatus.WindSunny)
        }
    
        if (isDay && isDay === 1) {
            return setIcon(WeatherStatus.Moon)
        }
        return setIcon(WeatherStatus.Sunny)
    }, [code, isDay])


    const IconSize = {
        sm: 'w-8',
        md: 'w-16',
        lg: 'w-44'
    }

    return <img src={icon || ''} alt="Warther Icon" className={cn(IconSize[size], className)} />
})
