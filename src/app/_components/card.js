"use client"
export const BaseCard = ({className, children}) => {
	return (
		<div className={`p-6 border border-gray-200 ${className}`}>
			{children}
		</div>
	)
}

export const AnimationCard = ({className, children}) => {
	return (
		<div className={`p-6 border border-gray-200 rounded-lg transition delay-100 duration-100 ease-in-out hover:shadow-md ${className}`}>
			{children}
		</div>
	)
}