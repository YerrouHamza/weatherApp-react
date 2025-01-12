import { IconSearch } from "@tabler/icons-react";
import TextInput from "./textInput";

export default function SerachField ({value, setValue}: {
    value: string,
    setValue: (value: string) => void
}) {
    return  (
        <div className="flex items-center bg-slate-200 rounded-2xl px-3 py-1">
            <IconSearch className="text-gray-400" />
            <TextInput
                value={value}
                className="bg-transparent w-full px-2 focus:outline-none dark:text-gray-600 focus:ring-0 border-0"
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search city"
            />
        </div>
    )
}