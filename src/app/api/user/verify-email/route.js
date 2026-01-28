import { NextResponse } from "next/server"

export async function POST(req) {
	try {
		const { token } = await req.json()
	
		const res = await fetch(`${process.env.BACKEND_API_URL}/auth/verify-email`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({token})
		})

		if (!res.ok) {
			return NextResponse.json(
				{ message: "Verifikasi gagal" },
				{ status: res.status }
			)
		}

		return NextResponse.json({
			success: true,
			message: "Verifikasi berhasil"
		})
		
	} catch {
		return NextResponse.json(
			{ message: 'Server error' },
			{ status: 500 }
		)
	}
}