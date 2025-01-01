import { IconBulbFilled, IconBulbOff } from '@tabler/icons-react';
import useThemeMode, { ThemeModeType } from '../hooks/useThemeMode';

const ModeIcon = ({ theme, className }: { theme: ThemeModeType; className?: string }) => {
    if (theme === 'light') return <IconBulbFilled className={className} />

    return <IconBulbOff className={className} />
}

export default function ThemeMode() {
    const [themeMode, handleToggleThemeMode] = useThemeMode();

    return (
        <button 
            className='flex flex-col items-center'
            onClick={() => handleToggleThemeMode(themeMode === 'light' ? 'dark' : 'light')}
        >
            <ModeIcon 
                theme={themeMode as ThemeModeType} 
                className='size-9 text-gray-500'
            />
        </button>
    )
}