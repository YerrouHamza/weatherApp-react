import { useEffect, useState, useRef } from 'react';
import useWeatherContext from '../context-api/weatherDataContext';
import api from '../../api';
import SerachField from '../components/ui/searchField';
import SearchCityList from '../components/searchCityList';
import useDebounce from '../hooks/useDebounce';
import useLoader from '../context-api/loaderOverlayContext';

export default function SerachCity() {
    const [search, setSearch] = useState('');
    const [city, setCity] = useState([]);
    const [searchFocus, setSearchFocus] = useState(false)
    const [debouncedValue] = useDebounce(search)
    const {setIsLoading} = useLoader()

    const serachRef = useRef<any>(null)
    const {fetchCity} = useWeatherContext();


    useEffect(() => {
        if(!search) return
        
        setIsLoading(true);
        api.get(`search.json?q=${search}`)
            .then((res) => {
                const data = res?.data
                setCity(data)

                setTimeout(() => {
                    setIsLoading(false)
                }, 300)
            })
            .catch((error) => {
                console.error('Error while request the data from API', error)
                setIsLoading(false)
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
        setSearchFocus(false)
    }

    return (
        <div 
            className="relative w-full max-w-2xl z-10" 
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