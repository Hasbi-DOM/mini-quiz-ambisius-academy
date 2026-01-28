export const TextInput = ({
		label, 
		name,  
		placeholder, 
		onSubmit, 
		onChange,
		value, 
		defaultValue ,
		type = 'text', 
		disabled = false,
		className
	}) => {
	return (
		<form action="submit" onSubmit={onSubmit}>
			<label className="text-sm font-medium">{label}</label>
			<input
				value={value}
				disabled={disabled}
				name={name}
				type={type}
				placeholder={placeholder} 
				className={`bg-[#F3F3F5] mt-1 w-full px-2.5 py-3 rounded-lg ${className}`}
				onChange={onChange}
				defaultValue={defaultValue}
			/>
		</form>
	)
}