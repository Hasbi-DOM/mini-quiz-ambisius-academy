'use client'
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { ButtonFilled } from "../_components/button"
import { BaseCard } from "../_components/card"
import Image from "next/image"

export default function VerifyEmail () {
	const params = useSearchParams()
	const token = params.get('token')
	console.log(token)
	const [verifyStatus, setVerifyStatus] = useState('')
	useEffect(() => {
		if (!token) return

		setVerifyStatus('loading')

		fetch('/api/auth/verify-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({token})
		})
		.then(res => {
			if(!res.ok) throw new Error()
			setVerifyStatus('success')
		}) 
		.catch(() => setVerifyStatus('error'))
	}, [token])
	return (
		<div className={`min-h-screen flex flex-col items-center justify-center`}>
			<div className="flex flex-col items-center space-y-8 max-w-lg">
				<div className="w-full flex flex-col justify-center items-center">
					<Image
						src="/logo.svg"
						alt="ambis logo"
						width={70}
						height={5}
						priority
					/>
					<div className="mt-4">
						<p className="text-4xl font-medium">Mini Quiz Ambis</p>		
					</div>
					<div className="mt-2">
						<p className="text-base text-[#717182]">Be Ambitious. Test Your Skills.</p>
					</div>
				</div>
				<BaseCard className="w-full rounded-lg border border-gray-200 shadow-md px-16 py-8 space-y-8">
					<div className="flex flex-col items-center gap-6">
						<div className="w-fit p-4 bg-[#DCFCE7] rounded-full flex items-center justify-center">
							<span className="material-symbols-outlined text-[#00A63E]" style={{fontSize: '56px'}}>check_circle</span>
						</div>
						<p className="text-3xl font-medium">{ verifyStatus ? 'Verifikasi Email Berhasil!' : 'Registrasi Berhasil!'}</p>
						<div className="flex flex-col items-center gap-1">
							<p className="text-base text-[#717182]">{verifyStatus ? 'Email telah terverifikasi' : 'Email verifikasi telah dikirim ke email Anda'}</p>
						</div>
						<p className="w-3/4 text-center text-sm text-[#717182]">
						{
							verifyStatus ? 'Silahkan login' : 'Silahkan cek spam Anda dan klik link verifikasi untuk mengaktifkan akun.'
						}
						</p>
					</div>
					<Link href={'/'}>
						<ButtonFilled 
							className={'w-full bg-[#030213]'}>
							<p className="text-white">Kembali ke Login</p>
						</ButtonFilled>
					</Link>
				</BaseCard> 
			</div>
		</div>
	)
}