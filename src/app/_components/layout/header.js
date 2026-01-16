import Image from "next/image"
import { ButtonBase } from "../button"

export const Header = () => {
	const pages = [
		{icon: 'home', label: 'Dashboard'},
		{icon: 'history', label: 'Riwayat '},
		{icon: 'person', label: 'Profil'}
	]
	return (
		<div className="relative">
			<div className="fixed top-0 right-0 left-0 z-10 bg-white px-8 py-4 shadow-md flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Image
						src="/logo.svg"
						alt="ambis logo"
						width={50}
						height={5}
						priority
					/>
					<div className="flex flex-col items-center">
						<p className="text-lg">Mini Quiz Ambis</p>
						<p className="text-sm text-[#717182]">Be Ambtious!</p>
					</div>
				</div>
				<div className="flex items-center gap-3">
					{
						pages.map((info, i) => (
							<ButtonBase key={i}>
								<span className="material-symbols-outlined" style={{fontSize: '24px'}}>{info.icon}</span>
								<p className="text-base">{info.label}</p>
							</ButtonBase>
						))
					}
				</div>
				<div className="flex items-center gap-4">
					<div className="flex flex-col items-end">
						<p className="text-base">John Doe</p>
						<p className="text-sm">User</p>
					</div>
					<div className="w-fit p-2 bg-[#030213] rounded-full flex justify-center">
						<span className="material-symbols-outlined text-white" style={{fontSize: '28px'}}>person</span>
					</div>
				</div>
			</div>
		</div>
	)
}