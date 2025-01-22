import React from "react";
import Button from "./ui/button";

type CityListType = {
    citys: {
        id: number,
        name: string,
        lat: number,
        lon: number
    }[],
    handleSerach: (lat: number, lon: number) => void
}

export default React.memo(function SearchCityList ({ citys, handleSerach } : CityListType) {
    return (
        <div className="absolute w-full max-h-[200px] overflow-y-scroll bg-slate-200 dark:bg-slate-700 rounded-md p-3 shadow-xl mt-2">
            <ul className='space-y-2'>
                {citys?.map((city) => (
                    <li key={city.id}>
                        <Button 
                            variant='link' 
                            className='font-medium text-left w-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all ease-in-out duration-300'
                            onClick={() => handleSerach(city.lat, city.lon)}
                        >
                            {city.name}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
})