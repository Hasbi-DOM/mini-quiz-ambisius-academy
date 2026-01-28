'use client';
import Image from "next/image"
import { ButtonBase } from "../button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useProfile } from "@/app/context/profile-context";

export const Header = () => {
	const user = useProfile()
	const data = user.data
	const pathname = usePathname()
	const pages = [
		{icon: 'home', label: 'Dashboard', link: '/main/dashboard'},
		{icon: 'history', label: 'Riwayat', link: '/main/history'},
		{icon: 'person', label: 'Profil', link: '/main/profile'}
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
						pages.map((info, i) => {
							const isActive = pathname === info.link
							return (
								<Link key={i} href={info.link}>
									<ButtonBase className={` ${isActive ? 'bg-[#030213] text-white hover:bg-gray-800' : 'hover:bg-gray-200'}`}>
										<span className="material-symbols-outlined" style={{fontSize: '24px'}}>{info.icon}</span>
										<p className="text-base">{info.label}</p>
									</ButtonBase>
								</Link>
							)
						}
					)}
				</div>
				<div className="flex items-center gap-4">
					<div className="flex flex-col items-end">
						<p className="text-base">{data?.name}</p>
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