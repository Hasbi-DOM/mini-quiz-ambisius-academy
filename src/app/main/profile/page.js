import { ButtonBase } from "@/app/_components/button"
import { BaseCard } from "@/app/_components/card"

export default function Profile () {
	const infoAccount = [
		{title: 'Nama Lengkap', value: 'John Doe', icon: 'person'},
		{title: 'Email', value: 'user@example.com', icon: 'email'},
		{title: 'Bergabung Sejak', value: '1 Januari 2024', icon: 'calendar_today'},
	]
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
								<ButtonBase className={'bg-white border border-gray-200 hover:border-gray-400 hover:bg-gray-200'}>
									<p className="text-sm font-medium">Edit</p>
								</ButtonBase>
							</div>
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
							</div>
						</BaseCard>
						<BaseCard className={'space-y-6 rounded-lg'}>
							<div className="space-y-2">
								<p className="text-2xl">Logout</p>
								<p className="text-base text-[#717182]">Keluar dari akun Anda</p>
							</div>
							<ButtonBase className={'w-full bg-[#D4183D] text-white justify-center hover:bg-red-700 py-2'}>
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