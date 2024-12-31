import { useState } from 'react';
import { IconBulbFilled, IconBulbOff} from '@tabler/icons-react';

enum Theme {
    Light = 'light',
    Dark = 'dark'
}

const ModeIcon = ({theme, className}: {theme: Theme; className?: string}) => {
    if (theme === 'light') return <IconBulbFilled className={className} />

    return <IconBulbOff className={className} />
}

export default function ThemeMode() {
    const [theme, setTheme] = useState('light')

    return (
        <button 
            className='flex flex-col items-center'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            <ModeIcon 
                theme={theme as Theme} 
                className='size-9 text-gray-500'
            />
        </button>
    )
}
