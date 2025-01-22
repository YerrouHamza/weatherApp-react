import React from "react"
import { cn } from "../../lib/utils"
import WeatherStatus from "../../lib/weatherIconsStatus"

type conditionIcon = {
    code: number
    className?: string,
    isDay?: number,
    size: 'sm' | 'md' | "lg"
}

const cloudyCode = [1006, 1009, 1030, 1135, 1003];
const snowCode = [1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282, 1069, 1072, 1117, 1147, 1150, 1168, 1171, 1198, 1201, 1237, 1204, 1207, 1249, 1252, 1261, 1264];
const rainCode = [1063, 1183, 1186, 1189, 1192, 1195, 1153, 1180, 1240, 1243, 1246];
const thunderyCode = [1276, 1087, 1273]

export default React.memo(function WeatherIconComponent({code, isDay, size, className}: conditionIcon) {
    const IconSize = {
        sm: 'w-8',
        md: 'w-16',
        lg: 'w-44'
    }
    const iconWeatherProps = {className: cn(IconSize[size], className), alt: "Warther Icon"}

    if (cloudyCode.includes(code)) {
        if(code === 1003) return <img src={isDay === 0 ? WeatherStatus.PrettyCloudyMoonIcon : WeatherStatus.PrettyCloudyMoonIcon} {...iconWeatherProps} />
        return <img src={WeatherStatus.CloudyIcon} {...iconWeatherProps} />
    } else if (snowCode.includes(code)) {
        return <img src={WeatherStatus.SnowIcon} {...iconWeatherProps} />
    } else if (rainCode.includes(code)) {
        return <img src={WeatherStatus.RainyIcon} {...iconWeatherProps} />
    } else if (thunderyCode.includes(code)) {
        if(code === 1087) return <img src={WeatherStatus.ThunderIcon} {...iconWeatherProps} />
        return <img src={WeatherStatus.RainyThunderIcon} {...iconWeatherProps} />
    }
    return <img src={isDay === 0 ? WeatherStatus.MoonIcon : WeatherStatus.SunnyIcon} {...iconWeatherProps} />
})
