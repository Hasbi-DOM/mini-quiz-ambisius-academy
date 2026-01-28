"use client"
import { ButtonBase } from "@/app/_components/button"
import { BaseCard } from "@/app/_components/card"
import { TextInput } from "@/app/_components/form"
import { useProfile } from "@/app/context/profile-context"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Profile () {
	const user = useProfile()
	const data = user.data
	const date = data.created_at

	const formattedDate = new Date(date).toLocaleDateString('id-ID', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	})
	const [logoutFailed, setLogoutFailed] = useState('')
	const [message, setMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [form, setForm] = useState({
		name: data.name ?? '',
		email: data.email ?? ''
	})
	const [modeEditProfile, setModeEditProfile] = useState(false)
	const router = useRouter()
	const infoAccount = [
		{title: 'Nama Lengkap', value: data.name, icon: 'person'},
		{title: 'Email', value: data.email, icon: 'email'},
		{title: 'Bergabung Sejak', value: formattedDate, icon: 'calendar_today'},
	]
	const handleChange = (e) => {
		const { name, value } = e.target
		setForm(prev => ({...prev, [name]: value}))
	}
	const handleSubmitLogout = async () => {
		const res = await fetch('/api/auth/logout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' }
		})

		if(!res.ok) {
			setLogoutFailed('Logout Failed')
			return
		}
		router.push('/')
	}
	const handleSubmitUpdateProfile = async (e) => {
		setIsLoading(true)
		e.preventDefault()
		
		const res = await fetch('/api/user/edit-profile', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form)
		})

		if(res.ok) {
			setIsLoading(false)
			setModeEditProfile(false)
			return
		} else {
			setIsLoading(false)
			setMessage('Update profile gagal')
			return
		}
	}
	return (
		<div className="flex justify-center">
			<div className="w-5/6 space-y-8 ">
				<div className="w-full flex flex-col justify-start">
					<p className="text-4xl font-medium">Profil Saya</p>
					<p className="text-lg text-[#717182]">Kelola informasi profil dan keamanan akun Anda</p>
				</div>
				<div className="w-full flex items-start gap-8">
					<div className="w-5/6 space-y-6">
						<BaseCard className="space-y-7 rounded-lg">
							<div className="flex items-center justify-between">
								<div className="space-y-1">
									<p className="text-2xl font-medium">Informasi Profil</p>
									<p className="text-base text-[#717182]">Kelola informasi pribadi Anda</p>
								</div>
								{!modeEditProfile && (
									<ButtonBase 
										onClick={() => setModeEditProfile(true)}
										className={'bg-white border border-gray-200 hover:border-gray-400 hover:bg-gray-200'}>
										<p className="text-sm font-medium">Edit</p>
									</ButtonBase>
								)}
							</div>
							{
								!modeEditProfile ?
								<div className="space-y-4">
									{
										infoAccount.map((info, i) => (
											<div key={i} className="rounded-lg p-4 flex items-center gap-3 bg-gray-200">
												<span className="material-symbols-outlined text-[#717182]" style={{fontSize: '24px'}}>{info.icon}</span>
												<div className="space-y-1">
													<p className="text-sm text-[#717182]">{info.title}</p>
													<p className="text-base font-medium">{info.value}</p>
												</div>	
											</div>
										))
									}
								</div> :
								<div className="space-y-4">
									<TextInput
										name={"name"}
										label={'Nama Lengkap'}
										defaultValue={data.name}
										onSubmit={handleSubmitUpdateProfile}
										onChange={handleChange}
									/>
									<div className="space-y-2">
										<TextInput
											name={"email"}
											label={'Email'}
											defaultValue={data.email}
											disabled={true}
											className={'text-gray-100'}
											onSubmit={handleSubmitUpdateProfile}
											onChange={handleChange}
										/>
										<p className="text-xs text-[#717182]">Email tidak dapat diubah</p>
									</div>
									<div className="flex items-center gap-3">
										<ButtonBase
											disabled={isLoading ? true : false}
											onClick={handleSubmitUpdateProfile}
											className={`bg-[#030213] rounded-lg hover:bg-gray-800 ${isLoading ? 'opacity-50' : ''}`}>
											<p className="text-sm text-white">{isLoading ? 'Menyimpan...' : 'Simpan'}</p>
										</ButtonBase>
										<ButtonBase 
											onClick={() => setModeEditProfile(false)}
											className={'rounded-lg border border-gray-200 hover:bg-gray-200 hover:border-gray-400'}>
											<p className="text-sm">Batal</p>
										</ButtonBase>
									</div>
								</div>
							}
						</BaseCard>
						<BaseCard className={'space-y-6 rounded-lg'}>
							<div className="space-y-2">
								<p className="text-2xl">Logout</p>
								<p className="text-base text-[#717182]">Keluar dari akun Anda</p>
							</div>
							<ButtonBase
								onClick={handleSubmitLogout}
								className={'w-full bg-[#D4183D] text-white justify-center hover:bg-red-700 py-2'}
							>
								<span className="material-symbols-outlined" style={{fontSize: '20px'}}>logout</span>
								<p className="text-sm">Logout</p>
							</ButtonBase>
						</BaseCard>
					</div>
					<div className="w-5/6">
						<BaseCard className={'space-y-7 rounded-lg'}>
							<div className="flex items-center justify-between">
								<div>
									<p className="text-2xl font-medium">Keamanan Akun</p>
									<p className="text-base text-[#717182]">Ubah password untuk keamanan akun</p>
								</div>
								<ButtonBase className={'flex items-center gap-3 bg-white border border-gray-200 hover:border-gray-400 hover:bg-gray-200'}>
									<span className="material-symbols-outlined" style={{fontSize: '20px'}}>lock</span>
									<p className="text-sm font-medium">Ubah</p>
								</ButtonBase>
							</div>
							<div className="space-y-3">
								<div className="w-3/4">
									<p className="text-sm text-[#717182]">Untuk keamanan akun, disarankan untuk mengubah password secara berkala.</p>
								</div>
								<div className="w-3/4">
									<p className="text-sm text-[#717182]">Gunakan kombinasi huruf besar, huruf kecil, angka, dan simbol untuk password yang kuat.</p>
								</div>
							</div>
						</BaseCard>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<ButtonBase className={'border border-gray-200 hover:border-gray-400 hover:bg-gray-200'}>
						<p className="text-sm font-semibold">Kembali ke Dashboard</p>
					</ButtonBase>
				</div>
			</div>
		</div>
	)
}