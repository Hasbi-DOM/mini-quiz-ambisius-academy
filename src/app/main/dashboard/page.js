import { ButtonCard, ButtonFilled } from "@/app/_components/button"
import { AnimationCard, BaseCard, Card } from "@/app/_components/card"
import { CardInfo } from "@/app/_components/layout/cardInfo"
import Link from "next/link"

export default function Dashboard () {
	const cardInfo = [
		{title: 'Total Subtest Tersedia', icon: 'assignment', value: '3', caption: 'Siap untuk dikerjakan'},
		{title: 'Rata-rata Durasi', icon: 'access_time', value: '32 min', caption: 'Per subtest'},
		{title: 'Progress Anda', icon: 'trending_up', value: 'Ambis!🔥', caption: 'Terus tingkatkan'},
	]
	
	return (
		<div className="w-full space-y-8">
			<div className="space-y-2">
				<p className="text-4xl font-medium">Halo, Jhon Doe!👋</p>
				<p className="text-lg text-[#717182]">Pilih subtest di bawah untuk memulai latihan kuis Anda</p>
			</div>
			<button className="w-full flex items-center gap-6">
				{
					cardInfo.map((info, i) => (
						<CardInfo
							key={i} 
							title={info.title}
							value={info.value}
							caption={info.caption}
							icon={info.icon}
						/>
					))
				}
			</button>
			<div className="space-y-6">
				<p className="text-3xl">Subtest Aktif</p>
				<div className="grid grid-cols-2 gap-6">
					{
						[1,2,3].map((index) => (
						<AnimationCard key={index} className={'space-y-6 hover:-translate-y-2'}>
							<div className="flex flex-col gap-3">
								<div className="flex items-center justify-between">
									<p className="text-xl">Verbal Reasoning</p>
									<div className="bg-[#FFF085] rounded-full px-2 py-1">
										<p className="text-[#894B00] text-xs">Sedang</p>
									</div>
								</div>
								<p className="text-start text-base text-[#717182]">Test kemampuan analisis dan pemahaman bahasa. Mengukur kemampuan logika verbal dan interpretasi teks.</p>
							</div>
							<div>
								<div className="flex items-center gap-2">
									<span className="material-symbols-outlined text-[#717182]" style={{fontSize: '20px'}}>assignment</span>
									<p className="text-base text-[#717182]">20 pertanyaan</p>
								</div>
								<div className="flex items-center gap-2">
									<span className="material-symbols-outlined text-[#717182]" style={{fontSize: '20px'}}>access_time</span>
									<p className="text-base text-[#717182]">25 menit</p>
								</div>
							</div>
							<Link href={'/quiz'}>
								<ButtonFilled
									className={'w-full bg-[#030213]'}
								>
									<p className="text-sm">Mulai Kuis</p>
								</ButtonFilled>
							</Link>
						</AnimationCard>
						))
					}
				</div>
			</div>	
			<div className="space-y-6 opacity-50">
				<p className="text-3xl">Subtest Tidak Aktif</p>
				<div className="grid grid-cols-2 gap-6">
					<BaseCard className={'w-fit space-y-6'}>
						<div className="flex flex-col gap-3">
							<div className="flex items-center justify-between">
								<p className="text-xl">Verbal Reasoning</p>
								<div className="bg-[#FFF085] rounded-full px-2 py-1">
									<p className="text-[#894B00] text-xs">Sedang</p>
								</div>
							</div>
							<p className="text-start text-base text-[#717182]">Test kemampuan analisis dan pemahaman bahasa. Mengukur kemampuan logika verbal dan interpretasi teks.</p>
						</div>
						<div>
							<div className="flex items-center gap-2">
								<span className="material-symbols-outlined text-[#717182]" style={{fontSize: '20px'}}>assignment</span>
								<p className="text-base text-[#717182]">20 pertanyaan</p>
							</div>
							<div className="flex items-center gap-2">
								<span className="material-symbols-outlined text-[#717182]" style={{fontSize: '20px'}}>access_time</span>
								<p className="text-base text-[#717182]">25 menit</p>
							</div>
						</div>
						<div>
							<ButtonFilled
								disabled
								className={'w-full bg-[#030213]'}
							>
								<p className="text-sm">Tidak Tersedia</p>
							</ButtonFilled>
						</div>
					</BaseCard>
				</div>
			</div>
		</div>
	)
}