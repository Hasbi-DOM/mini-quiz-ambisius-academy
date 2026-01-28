'use client';
import Image from "next/image";
import { ButtonFilled } from "./_components/button";
import { TextInput } from "./_components/form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BaseCard } from "./_components/card";

export default function Auth() {
	const router = useRouter()
	
	const [mode, setMode] = useState(false)
	const [loginFailed, setLoginFailed] = useState('')
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const [verifyStatus, setVerifyStatus] = useState('')
	const [form, setForm] = useState({
		email: '',
		password: '',
		name: '',
	})
	
	const handleChange = (e) => {
		const { name, value } = e.target
		setForm(prev => ({...prev, [name]: value}))
	}

	const formLogin = [
		{
			name: 'email',
			label: "Email", 
			type: "email", 
			placeholder: "user@example.com",
		},
		{ 
			name: 'password',
			label: "Password", 
			type: "password", 
			placeholder: "Password123"
		},
	]
	const formRegister = [
		{
			name: "name", 
			label: "Nama Lengkap", 
			type: "fullname", 
			placeholder: "John Doe"
		},
		{
			name: "email",
			label: "Email", 
			type: "email", 
			placeholder: "nama@example.com"
		},
		{
			name: "password",
			label: "Password", 
			type: "password", 
			placeholder: "Minimal 8 Karakter"
		}
	]
	const handleChangeLoginSection = () => {
		setMode(false)
	}
	const handleChangeRegisterSection = () => {
		setMode(true)
	}

	const handleSubmitLogin = async (e) => {
		e.preventDefault()

		const res = await fetch('/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form)
		})

		if(!res.ok) {
			setLoginFailed('Invalid credentials')
			return
		}
		router.push('/main/dashboard')
	}

	const handleSubmitRegister = async (e) => {
		e.preventDefault()

		const res = await fetch('/api/user/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form)
		})
		const data = await res.json()
		if(!res.ok) {
			setError(data.message)
			return
		}

		setSuccess(data.message)
		router.push('/verify')
	}

	return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${mode ? 'py-4' : ''}`}>
		<div className="flex flex-col items-center space-y-8 min-w-lg">
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
			<BaseCard className="w-full rounded-lg border border-gray-200 shadow-md px-16 py-8">
				<div className="text-center space-y-2">
					<p className="text-3xl font-medium">Masuk ke Akun Anda</p>
					<p className="text-base text-[#717182] ">Lanjutkan perjalanan ambis Anda</p>
				</div>
				<div className="mt-8 space-y-5 flex flex-col items-start justify-start">
					{
						(mode ? formRegister : formLogin).map((info, i) => (
						<div key={i} className="w-full">
							<TextInput 
								name={info.name}
								label={info.label} 
								placeholder={info.placeholder}
								type={info.type}
								onSubmit={mode ? handleSubmitRegister : handleSubmitLogin}
								onChange={handleChange}
							/>
						</div>
						))
					}
					<div className="w-full">
						<ButtonFilled
							onClick={mode ? handleSubmitRegister : handleSubmitLogin}
							className={'bg-[#030213]'}
						>
							<p className="text-sm">{ mode ? 'Daftar' : 'Masuk'}</p>
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
			</BaseCard>
		</div>
    </div>
	);
}
