import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const {name, email, password} = await req.json()

		const res = await fetch(
			`${process.env.BACKEND_API_URL}/auth/register`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({name, email, password}),
			}
		)
		const data = await res.json()
		// Jika backend gagal
		if (!res.ok) {
			return NextResponse.json(
				{ message: data.message || 'Register gagal' },
				{ status: res.status }
			)
		}

		// Backend berhasil (email verification dikirim)
		return NextResponse.json(
			{
				success: true,
				message: 'Silakan cek email untuk verifikasi akun',
			},
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json(
			{ message: 'Server error' },
			{ status: 500 }
		)
	}
}