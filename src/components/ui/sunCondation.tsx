import { IconSunrise, IconSunset } from "@tabler/icons-react"
import React from "react"

type sunType = 'sunrise' | 'sunset'

type subIconType = {
    type: sunType,
    stroke: number,
    className: string
}

const SunIcon = React.memo(({type, stroke, className}: subIconType) => {
    const combinedProps = {stroke, className}

    return type === 'sunrise' ? <IconSunrise {...combinedProps} /> : <IconSunset {...combinedProps} />
})

export default function SunCondation({time,type}:{time: string, type: sunType}) {
  return (
    <div className="flex items-center gap-2">
        <SunIcon type={type} stroke={1.4} className="size-14 text-gray-600 dark:text-gray-200 font-medium" />
        <div>
            <h3 className="text-xl text-gray-700 dark:text-gray-300 font-medium capitalize">{type}</h3>
            <span className="block text-md font-semibold dark:text-gray-100">{time}</span>
        </div>
    </div>
  )
}


