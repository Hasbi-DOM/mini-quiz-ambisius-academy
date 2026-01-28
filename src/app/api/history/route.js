import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
	try {
		const cookieStore = cookies()
		const token = (await cookieStore).get('access_token')?.value
		if (!token) {
			return NextResponse.json(
				{ message: 'Unauthorized' },
				{ status: 401 }
			)
		}
		
		const res = await fetch(`${process.env.BACKEND_API_URL}/quiz/history`, {
			method: 'GET',
			headers: { 
				'Content-Type': 'application/json' ,
				'Authorization': `Bearer ${token}`
			},
		})

		if (!res.ok) {
			return NextResponse.json(
				{ message: "Gagal mengambil data" },
				{ status: res.status }
			)
		}
		const result = await res.json()
		return NextResponse.json({
			success: true,
			message: "Berhasil mengambil data",
			data: result
		})
		
	} catch {
		return NextResponse.json(
			{ message: 'Server error' },
			{ status: 500 }
		)
	}
}