import React, { useEffect, useState } from "react"
import moment from "moment"
import WeatherStatus from "../../lib/weatherIconsStatus"
import { cn } from "../../lib/utils"

type conditionIcon = {
    time?: any,
    code: number
    className?: string,
    size: 'sm' | 'md' | "lg"
}

export default React.memo(function WeatherIconComponent({code, time, size, className}: conditionIcon) {
    const [icon, setIcon] = useState<string | null>(null)
    
    useEffect(() => {
        const hour = moment(time).format('HH') as any
        if ([1003, 1006, 1009].includes(code)) {
            return setIcon(WeatherStatus.Cloudy)
        } else if (
            [1063, 1183, 1186, 1189, 1192, 1195].includes(code)
        ) {
            return setIcon(WeatherStatus.Rainy)
        } else if ([1117, 1204, 1210, 1216].includes(code)) {
            return setIcon(WeatherStatus.WindSunny)
        }
    
        if (time && (hour >= 18 || hour <= 6)) {
            return setIcon(WeatherStatus.Moon)
        }
        return setIcon(WeatherStatus.Sunny)
    }, [code, time])


    const IconSize = {
        sm: 'w-8',
        md: 'w-16',
        lg: 'w-44'
    }

    return <img src={icon || ''} alt="" className={cn(IconSize[size], className)} />
})
