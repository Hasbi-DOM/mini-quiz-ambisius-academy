'use client';
import { useState } from "react";
import { ButtonBase } from "../_components/button";
import { BaseCard } from "../_components/card";
import { Progress } from "../_components/progress";

export default function Quiz () {
	const [answerChoose, setAnswerChoose] = useState(null)
	const answer = [
		{label: 'Kreatif', value: 1},
		{label: 'Teliti', value: 2},
		{label: 'Rajin', value: 3},
		{label: 'Cepat', value: 4},
	]
	return (
		<div className="py-6 flex items-center justify-center">
			<div className="min-w-3/4 max-w-3/4 flex flex-col items-center space-y-4">
				<BaseCard className={'w-full rounded-lg space-y-4'}>
					<div className="flex items-center justify-between">
						<div className="flex flex-col items-start gap-1">
							<p className="text-2xl font-medium">Verbal Reasoning</p>
							<p className="text-base text-[#717182]">Soal 3 dari 3</p>
						</div>
						<div className="flex flex-col items-end gap-1">
							<p className="text-4xl font-medium">29:49</p>
							<p className="text-sm text-[#717182]">Waktu tersisa</p>
						</div>
					</div>
					<Progress/>
				</BaseCard>
				<BaseCard className={'w-full rounded-lg space-y-6'}>
					<div className="flex items-start justify-between">
						<p className="w-3/4 text-2xl">Kata "PRODUKTIF" berhubungan dengan "EFISIEN" seperti "KREATIF" berhubungan dengan:</p>
						<span className="material-symbols-outlined text-[#00A63E]" style={{fontSize: '30px'}}>check_circle</span>
					</div>
					<div className="flex flex-col gap-4">
						{
							answer.map((info, i) => {
								const isAnswer = answerChoose === (i+1)
								return (
									<button key={i} onClick={() => setAnswerChoose(isAnswer ? null : (i+1))} >
										<BaseCard className={`${ isAnswer ? 'border-2 border-gray-600' : 'hover:border-gray-400 hover:bg-gray-200 cursor-pointer'} rounded-lg flex items-center gap-4  hover:rounded-lg`}>
											<div className="w-fit">
												{
													isAnswer ?
													<div className="w-6 h-6 bg-[#030213] rounded-full flex items-center justify-center">
														<div className="w-2 h-2 bg-white rounded-full"/>
													</div> :
													<div className="w-6 h-6 border border-gray-400 rounded-full"/>
												}
											</div>
											<p className="text-lg">{info.label}</p>
										</BaseCard>
									</button>
								)}
							)
						}
					</div>
				</BaseCard>
				<div className="w-full flex items-center justify-between">
					<ButtonBase className={'flex items-center gap-4 border border-gray-300 bg-white hover:bg-gray-200'}>
						<span className="material-symbols-outlined" style={{fontSize: '20px'}}>keyboard_arrow_left</span>
						<p className="text-sm">Sebelumnya</p>
					</ButtonBase>
					<p className="text-base text-[#717182]">3 dari 3 soal terjawab</p>
					<ButtonBase className={'flex text-white items-center gap-4 bg-[#030213] hover:bg-gray-800'}>
						<p className="text-sm ">Selanjutnya</p>
						<span className="material-symbols-outlined" style={{fontSize: '20px'}}>keyboard_arrow_right</span>
					</ButtonBase>
				</div>
				<ButtonBase className={'flex text-[#717182] hover:text-[#030213] items-center hover:bg-gray-200'}>
					<p className="text-sm font-medium">Keluar dari Kuis</p>
				</ButtonBase>
			</div>
		</div>
	)
}