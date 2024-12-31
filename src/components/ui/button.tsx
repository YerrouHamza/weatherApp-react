import React from 'react'

export default function Button({
    children,
    variant,
    onClick,
    className,
}: {
    children: React.ReactNode
    variant: 'primary' | 'secondary'
    onClick?: () => void
    className?: string
}) {
    const buttonStyle = {
        primary: 'bg-blue-500 hover:bg-blue-700',
        secondary: 'bg-gray-500 hover:bg-gray-700',
    }
    return (
        <button
            className={`
                ${buttonStyle[variant]} 
                text-white font-bold py-3 px-4 rounded-lg
                ${className}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
