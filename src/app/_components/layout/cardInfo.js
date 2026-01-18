export const CardInfo = ({title, value, caption, icon, iconColor, className}) => {
	return (
		<div className={`w-full space-y-6 border border-gray-200 rounded-lg transition delay-100 duration-300 ease-in-out hover:shadow-md ${className}`}>
			<div className="px-6 py-4 flex items-center justify-between">
				<p className="text-base font-medium">{title}</p>
				<span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
			</div>
			<div className="flex flex-col items-start px-6 pb-6">
				<p className="text-4xl">{value}</p>
				<p className="text-xs text-[#717182]">{caption}</p>
			</div>
		</div>
	)
}