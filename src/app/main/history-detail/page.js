import { ButtonBase, ButtonFilled } from "@/app/_components/button";
import { BaseCard } from "@/app/_components/card";
import { CardInfo } from "@/app/_components/layout/cardInfo";
import { Progress } from "@/app/_components/progress";
import Link from "next/link";

export default function HistoryDetail () {
	const infoCard = [
		{title: 'Jawaban Benar', value: '17', caption: 'dari 20 soal', icon: 'check_circle', iconColor: 'text-[#00A63E]'},
		{title: 'Jawaban Salah', value: '3', caption: 'soal', icon: 'cancel', iconColor: 'text-[#E7000B]'},
		{title: 'Waktu Pengerjaan', value: '30', caption: 'menit', icon: 'access_time', iconColor: 'text-[#717182]'}
	]
	return (
		<div className="flex flex-col items-center gap-8">
			<div className="flex flex-col items-center gap-4">
				<div className="w-fit bg-[#DCFCE7] p-6 rounded-full">
					<span className="material-symbols-outlined text-[#00A63E]" style={{fontSize: '80px'}}>emoji_events</span>	
				</div>
				<p className="text-4xl font-medium">Hebat! 🎉</p>
				<p className="text-lg text-[#717182]">Kuis "Verbal Reasoning" telah selesai</p>
			</div>
			<div className="min-w-3/4 space-y-8">
				<BaseCard className={'w-full rounded-lg shadow-lg flex flex-col items-center gap-6'}> 
					<p className="text-[#00A63E] text-8xl">85</p>
					<Progress/>
					<p className="text-lg text-[#717182]">Skor Anda dari 100</p>
				</BaseCard>
				<div className="w-full grid grid-cols-3 gap-6">
					{
						infoCard.map((info, i) => (
							<CardInfo
								key={i} 
								title={info.title}
								value={info.value}
								caption={info.caption}
								icon={info.icon}
								iconColor={info.iconColor}
							/>
						))
					}
					<BaseCard className={'rounded-lg space-y-7 transition delay-100 duration-300 ease-in-out hover:shadow-md'}>
						<p className="text-xl font-medium">Detail Hasil</p>
						<div className="space-y-4">
							<div className="space-y-1">
								<p className="text-[#717182] text-sm">Subtest</p>
								<p className="text-base">Verbal Reasoning</p>
							</div>
							<div className="space-y-1">
								<p className="text-[#717182] text-sm">Tanggal Selesai</p>
								<p className="text-base">10 Januari 2024 pukul 21.30</p>
							</div>
							<div className="space-y-1">
								<p className="text-[#717182] text-sm">Total Soal</p>
								<p className="text-base">20 pertanyaan</p>
							</div>
							<div className="space-y-1">
								<p className="text-[#717182] text-sm">Akurasi</p>
								<p className="text-base">85%</p>
							</div>
						</div>
					</BaseCard>
				</div>
				<div className="flex items-center justify-between gap-4">
					<Link href={'/main/dashboard'} className="w-full">
						<ButtonFilled className={'bg-[#030213] text-white'}>
							<span className="material-symbols-outlined" style={{fontSize: '20px'}}>dashboard</span>
							<p className="text-sm">Kembali ke Dashboard</p>
						</ButtonFilled>
					</Link>
					<Link href={'/main/history'} className="w-full">
						<ButtonBase className={'w-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 hover:border-gray-400'}>
							<span className="material-symbols-outlined" style={{fontSize: '20px'}}>trending_up</span>
							<p className="text-sm">Lihat Riwayat</p>
						</ButtonBase>
					</Link>
				</div>
			</div>
		</div>
	)
}