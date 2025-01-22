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
    <div className={cn('w-full h-full shadow rounded-xl bg-gray-200 dark:text-gray-50 bg-opacity-15 dark:bg-opacity-20 backdrop-blur-md', className)}>
        <div className={cn('py-6 px-5', bodyClass)}>
            {children}
        </div>
    </div>
  )
}
