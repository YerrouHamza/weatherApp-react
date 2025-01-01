
import { useState } from 'react';

export type ThemeModeType = 'light' | 'dark';

export default function useThemeMode(): [ThemeModeType, (mode: ThemeModeType) => void] {
    const [themeMode, setThemeMode] = useState<ThemeModeType>('light');

    const body = document.body.classList;
    const handleToggleThemeMode = (mode: ThemeModeType) => {
        setThemeMode(mode)

        if(mode === 'dark') body.add('dark')
        else body.remove('dark')
    }

    return [themeMode, handleToggleThemeMode]
}
