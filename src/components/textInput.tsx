export default function TeaxtInput ({
    value,
    onChange,
    type = 'text',
    required = false,
    placeholder = '',
    className = '',
    ...props
}: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: string;
    required?: boolean;
    placeholder?: string;
    className?: string;
}) {
    const inputClass = 'h-10 px-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300'

    if(type === 'textarea') return <textarea
        value={value}
        className={`${inputClass} ${className}`}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        {...props}
    />

    return <input
        type={type}
        value={value}
        className={`${inputClass} ${className}`}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        {...props}
    />
}