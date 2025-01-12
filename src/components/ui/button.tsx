import React from 'react'

export default function Button({
    children,
    variant,
    onClick,
    className,
}: {
    children: React.ReactNode
    variant: 'primary' | 'secondary' | 'link',
    onClick?: () => void
    className?: string
}) {
    const buttonStyle = {
        primary: 'text-white bg-blue-500 hover:bg-blue-700',
        secondary: 'text-white bg-gray-500 hover:bg-gray-700',
        link: '',
    }
    return (
        <button
            className={`
                ${buttonStyle[variant]} 
                font-medium py-3 px-4 rounded-lg
                ${className}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
