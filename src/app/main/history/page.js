'use client';
import { ButtonBase } from "@/app/_components/button";
import { BaseCard } from "@/app/_components/card";
import { CardInfo } from "@/app/_components/layout/cardInfo";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function History () {
	const [expandedIndex, setExpandedIndex] = useState(null)
	const [dataResults, setDataResults] = useState([])
	const infoCard = [
		{title: 'Total Kuis', icon: 'assignment', value: '3', caption: 'Diselesaikan'},
		{title: 'Rata-rata Skor', icon: 'trending_up', value: '82', caption: 'dari 100'},
		{title: 'Skor Terbaik', icon: 'emoji_events', value: '90', caption: 'Personal best'},
		{title: 'Total Soal', icon: 'adjust', value: '60', caption: 'Terjawab'},
	]

	useEffect(() => {
		const getHistory = async () => {
			const res = await fetch('/api/history', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			})

		if(!res.ok) {
			setError('Gagal mengambil data')
			return
		}
		const result = await res.json()
		setDataResults(result.data.data.results)
		// const quiz = result.data
	}
	getHistory()
	}, [])
	return (
		<div className="space-y-8">
			<div className="flex flex-col gap-2">
				<p className="text-4xl font-medium">Riwayat Kuis</p>
				<p className="text-lg text-[#717182]">Lihat semua hasil kuis yang telah Anda kerjakan</p>
			</div>
			<div className="flex items-center gap-6">
				{
					infoCard.map((info, i) => (
						<CardInfo
							key={i}
							title={info.title}
							value={info.value}
							icon={info.icon}
							caption={info.caption}
						/>
					))
				}
			</div>
			<BaseCard className={'flex flex-col rounded-lg'}>
				<div className="space-y-4">
				<p className="text-2xl font-medium">Hasil Kuis</p>
					{
						dataResults.map((info, i) => {
							const isExpanded = expandedIndex === info
							return (
								<div key={i} className="hover:border border-gray-400 rounded-lg">
									<button onClick={() => setExpandedIndex(isExpanded ? null : i)} className="w-full cursor-pointer hover:bg-gray-200 hover:rounded-lg">
										<BaseCard className={`w-full flex items-center justify-between ${isExpanded ? "rounded-t-lg rounded-b-none" : "rounded-lg"}`}>
											<div className="space-y-2">
												<div className="flex items-center gap-3">
													<p className="text-lg">{info.subtest_name}</p>
													<div className="px-2 py-1 rounded-full bg-[#B9F8CF]">
														<p className="text-xs">Excellent</p>
													</div>
												</div>
												<div className="flex items-center gap-4">
													<div className="flex items-center gap-2">
														<span className="material-symbols-outlined text-[#717182]" style={{fontSize: '20px'}}>calendar_today</span>
														<p className="text-sm text-[#717182]">{`${new Date(info.completed_at).toLocaleDateString('id-ID', {
															day: '2-digit',
															month: 'short',
															year: 'numeric',
														})}• 
														${new Date(info.completed_at).toLocaleTimeString("id-ID", {
															hour: "2-digit",
															minute: "2-digit"
														})}}`}</p>
													</div>
													<div className="flex items-center gap-2">
														<span className="material-symbols-outlined text-[#717182]" style={{fontSize: '20px'}}>adjust</span>
														<p className="text-sm text-[#717182]">17/20 benar</p>
													</div>
												</div>
											</div>
											<div className="flex items-center gap-4">
												<div className="flex flex-col items-center gap-2">
													<p className="text-4xl">{info.score}</p>
													<p className="text-xs">Skor</p>
												</div>
												{
													isExpanded ? (
														<span className="material-symbols-outlined text-[#717182]" style={{fontSize: '24px'}}>keyboard_arrow_up</span>
													) : (
														<span className="material-symbols-outlined text-[#717182]" style={{fontSize: '24px'}}>keyboard_arrow_down</span>
													)
												}
											</div>
										</BaseCard>
									</button>
									{
										isExpanded && (
										<div className="bg-gray-50 space-y-4 p-5 border border-gray-200 rounded-b-md">
											<div className="grid grid-cols-4">
												<div className="flex flex-col items-start gap-1">
													<p className="text-xs text-[#717182]">Total Soal</p>
													<p className="text-base font-medium">20</p>
												</div>
												<div className="flex flex-col items-start gap-1">
													<p className="text-xs text-[#717182]">Jawaban Benar</p>
													<p className="text-base text-[#00A63E] font-medium">1</p>
												</div>
												<div className="flex flex-col items-start gap-1">
													<p className="text-xs text-[#717182]">Jawaban Salah</p>
													<p className="text-base text-[#E7000B] ">2</p>
												</div>
												<div className="flex flex-col items-start gap-1">
													<p className="text-xs text-[#717182]">Akurasi</p>
													<p className="text-base font-medium">33%</p>
												</div>
											</div>
											<Link href={'/main/history-detail'}>
												<ButtonBase className={'bg-white border border-gray-200 flex items-center gap-4 hover:bg-gray-200'}>
													<p className="text-sm font-medium">Lihat Detail</p>
													<span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
												</ButtonBase>
											</Link>
										</div>
										)
									}
								</div>
							)
						})
					}
				</div>
			</BaseCard>
			<div className="w-full flex justify-center">
				<Link href={'/main/dashboard'}>
					<ButtonBase className={'border border-gray-200 hover:border-gray-400 hover:bg-gray-200'}>
						<p className="text-sm font-medium">Kembali ke Dashboard</p>
					</ButtonBase>
				</Link>
			</div>
		</div>
	)
} 