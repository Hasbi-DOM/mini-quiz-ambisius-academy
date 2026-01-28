import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req) {
	try {
		const {name, email} = await req.json()
		const cookieStore = cookies()
		const token = (await cookieStore).get('access_token')?.value
		if (!token) {
			return NextResponse.json(
				{ message: 'Unauthorized' },
				{ status: 401 }
			)
		}
		
		const res = await fetch(`${process.env.BACKEND_API_URL}/auth/profile`, {
			method: 'PUT',
			headers: { 
				'Content-Type': 'application/json' ,
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({name, email})
		})

		if (!res.ok) {
			return NextResponse.json(
				{ message: "Update profil gagal" },
				{ status: res.status }
			)
		}

		return NextResponse.json({
			success: true,
			message: "Update profil berhasil"
		})
		
	} catch {
		return NextResponse.json(
			{ message: 'Server error' },
			{ status: 500 }
		)
	}
}