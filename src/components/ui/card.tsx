import { cn } from "../../lib/utils"

export default function Card({
    children,
    className,
    bodyClass
}:{
    children: React.ReactNode,
    className?: string,
    bodyClass?: string
}) {
  return (
    <div className={cn('w-full h-full shadow rounded-xl bg-gray-200 bg-opacity-15 backdrop-blur-md', className)}>
        <div className={cn('p-5', bodyClass)}>
            {children}
        </div>
    </div>
  )
}
