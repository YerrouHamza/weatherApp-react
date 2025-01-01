
import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export type ThemeModeType = 'light' | 'dark';

export default function useThemeMode(): [ThemeModeType, (mode: ThemeModeType) => void] {
    const [themeMode, setThemeMode] = useLocalStorage<ThemeModeType>('themeMode', 'light');

    useEffect(() => {
        const body = document.body.classList;
        if(themeMode === 'dark') body.add('dark')
        else body.remove('dark')
    }, [themeMode])

    const handleToggleThemeMode = (mode: ThemeModeType) => {
        setThemeMode(mode)
    }

    return [themeMode, handleToggleThemeMode]
}
