'use client';
import Image from "next/image";
import { ButtonFilled } from "./_components/button";
import { TextInput } from "./_components/form";
import { useState } from "react";

export default function Auth() {
	const [mode, setMode] = useState(false)
	const formLogin = [
		{label: "Email", placeholder: "user@example.com"},
		{label: "Password", placeholder: "Password123"},
	]
	const formRegister = [
		{label: "Nama Lengkap", placeholder: "John Doe"},
		{label: "Email", placeholder: "nama@example.com"},
		{label: "Password", placeholder: "Minimal 8 Karakter"},
		{label: "Konfirmasi Password", placeholder: "Masukkan password lagi"}
	]

	const handleChangeRegisterSection = () => {
		setMode(true)
	}
	const handleChangeLoginSection = () => {
		setMode(false)
	}
	return (
    <div className="min-h-screen py-4 flex items-center justify-center">
		<main className="flex flex-col items-center space-y-8 min-w-lg">
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
			<div className="w-full rounded-lg border border-gray-200 shadow-md px-16 py-8">
				<div className="text-center space-y-2">
					<p className="text-3xl font-medium">Masuk ke Akun Anda</p>
					<p className="text-base text-[#717182] ">Lanjutkan perjalanan ambis Anda</p>
				</div>
				<div className="mt-8 space-y-5 flex flex-col items-start justify-start">
					{
						(mode ? formRegister : formLogin).map((info, i) => (
						<div key={i} className="w-full">
							<TextInput label={info.label} placeholder={info.placeholder}/>
						</div>
						))
					}
					<div className="w-full">
						<ButtonFilled
							className={'bg-[#030213]'}
						>
							<p className="text-sm">Masuk</p>
						</ButtonFilled>
					</div>
				</div>
				<div className="mt-8 flex flex-col items-center">
					<div className="flex items-center gap-1">
						<p className="text-sm text-[#717182]">{mode ? 'Sudah punya akun?' : 'Belum punya akun?'}</p>
						<a onClick={mode ? handleChangeLoginSection : handleChangeRegisterSection} className="cursor-pointer text-base text-[#030213] hover:text-gray-700">
							{mode ? 'Masuk disini' : 'Daftar sekarang'}
						</a>
					</div>
				</div>
			</div>
		</main>
    </div>
	);
}
