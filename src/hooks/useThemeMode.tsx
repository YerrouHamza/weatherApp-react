
import { useEffect, useState } from 'react';

export type ThemeModeType = 'light' | 'dark';

export default function useThemeMode(): [ThemeModeType, (mode: ThemeModeType) => void] {
    const [themeMode, setThemeMode] = useState<ThemeModeType>('light');

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
