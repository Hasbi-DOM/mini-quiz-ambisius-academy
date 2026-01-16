export const ButtonFilled = ({children, className}) => {
	return (
		<button 
			className={`w-full flex items-center justify-center gap-1 text-white hover:bg-gray-800 active:bg-gray-700 py-2 px-3 rounded-lg cursor-pointer ${className}`}
		>
			{children}
		</button>
	)
}

export const ButtonBase = ({children}) => {
	return (
		<button className="py-2 px-3 rounded-lg cursor-pointer flex items-center gap-1 hover:bg-gray-200">
			{children}
		</button>
	)
}

export const ButtonCard = ({children, className}) => {
	return (
		<button className={`border border-gray-200 rounded-lg cursor-pointer space-y-6 transition delay-100 duration-300 ease-in-out hover:shadow-md ${className}`}>
			{children}
		</button>
	)
}