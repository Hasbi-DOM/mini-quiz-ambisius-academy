import { NextResponse } from "next/server";

export async function GET(req) {
	const token = req.cookies.get('access_token')?.value
	
	if (!token) {
		return NextResponse.json(
			{ message: 'Unauthorized' },
			{ status: 401 }
		)
	}
	const res = await fetch(`${process.env.BACKEND_API_URL}/subtests`, {
		method: 'GET',
		headers: { 
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	})

	const data = await res.json()
	if(!res.ok) {
		return NextResponse.json(
			{ message: res.message || 'Gagal mengambil data'},
			{ status: res.status}
		)
	}
	return NextResponse.json({
		success: true,
		data
	})
}