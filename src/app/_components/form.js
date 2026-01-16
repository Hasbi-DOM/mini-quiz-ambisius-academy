export const TextInput = ({label, placeholder}) => {
	return (
		<form action="submit">
			<label className="text-sm">{label}</label>
			<input 
				type="text"
				placeholder={placeholder} 
				className="bg-[#F3F3F5] mt-1 w-full px-2.5 py-3 rounded-lg"
			/>
		</form>
	)
}