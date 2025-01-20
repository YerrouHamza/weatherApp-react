import { useContext, useEffect, useState, useRef } from 'react';
import { WeatherData } from '../context-api/weatherDataContext';
import api from '../../api';
import SerachField from '../components/ui/searchField';
import SearchCityList from '../components/searchCityList';
import useDebounce from '../hooks/useDebounce';

export default function SerachCity() {
    const [search, setSearch] = useState('');
    const [city, setCity] = useState([]);
    const [searchFocus, setSearchFocus] = useState(false)
    const [debouncedValue] = useDebounce(search)
    
    const serachRef = useRef<any>(null)
    const weatherContext = useContext(WeatherData);
    if (!weatherContext) throw new Error('Error while getting the weather context')
    const { fetchCity } = weatherContext


    useEffect(() => {
        api.get(`search.json?q=${search || 'london'}`)
            .then((res) => {
                console.log(res)
                const data = res?.data
                setCity(data)
            })
            .catch((error) => {
                console.error('Error while request the data from API', error)
            })
    }, [debouncedValue])

    const handleUnFoucs = (e: React.FocusEvent<HTMLDivElement>) => {
        if(serachRef.current && !serachRef.current.contains(e.relatedTarget as Node)) {
            setSearchFocus(false)
        }
    }

    const handleGetSearchCityWeather = (latitude: number, longitude: number) => {
        if(!latitude && !longitude) return console.error('Error while get the latitude, longitude')    
        const targetCity = `${latitude},${longitude}`
        try {
            fetchCity(targetCity)
        } catch (error) {
            return console.error('Error while fetching the target city', error);
        }
        setSearch('')
    }

    return (
        <div 
            className="relative w-full max-w-xl z-10" 
            ref={serachRef} 
            onFocus={() => setSearchFocus(true)}
            onBlur={handleUnFoucs}
            tabIndex={-1}
        >
            <SerachField value={search} onChange={setSearch} />

            {(search !== '' && city.length !== 0 && searchFocus) &&                
                <SearchCityList citys={city} handleSerach={handleGetSearchCityWeather} />
            }
        </div>
    )
}