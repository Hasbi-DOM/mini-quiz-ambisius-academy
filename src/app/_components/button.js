'use client'
export const ButtonFilled = ({children, className, onClick}) => {
	return (
		<button
			onClick={onClick}
			className={`w-full flex items-center justify-center gap-1 text-white hover:bg-gray-800 active:bg-gray-700 py-2 px-3 rounded-lg cursor-pointer ${className}`}
		>
			{children}
		</button>
	)
}

export const ButtonBase = ({children, className, ...props}) => {
	return (
		<button 
			{...props}
			className={`py-2 px-3 rounded-lg cursor-pointer flex items-center gap-1 ${className}`}>
			{children}
		</button>
	)
}