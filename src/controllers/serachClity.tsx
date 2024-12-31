import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';

export default function SerachClity() {
    const [search, setSearch] = useState('');
    
    return (
        <div className="flex items-center bg-slate-200 rounded-2xl px-3 py-3 w-full max-w-xl">
            <IconSearch className="text-gray-400" />
            <input
                value={search}
                className="bg-transparent w-full px-2 focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search city"
            />
        </div>
    )
}