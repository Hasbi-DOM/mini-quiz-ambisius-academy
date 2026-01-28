import { NextResponse } from "next/server";

export async function GET(req) {
const token = req.cookies.get('access_token')?.value
const { searchParams } = new URL(req.url)
const subtestId = searchParams.get('subtest_id')

if (!token) {
	return NextResponse.json(
		{ message: 'Unauthorized' },
		{ status: 401 }
	)
}

if (!subtestId) {
	return NextResponse.json(
		{ message: 'subtest_id is required' },
		{ status: 400 }
	)
}

const res = await fetch(
	`${process.env.BACKEND_API_URL}/quiz/start/${subtestId}`,
	{
		method: 'GET', // sesuaikan backend
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	}
)

	const data = await res.json()

if (!res.ok && data.message == 'Active quiz exists') {
	const activeRes = await fetch(
	`${process.env.BACKEND_API_URL}/quiz/active`,
		{
			headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
			}
		}
	)

const activeData = await activeRes.json()

	if (!activeRes.ok) {
		return NextResponse.json(
			{ message: activeData.message || 'Gagal mengambil quiz aktif' },
			{ status: activeRes.status }
		)
		}

		return NextResponse.json({
			success: true,
			data: activeData,
			from: 'active'
		})
	}

	// 3️⃣ Error selain "active quiz exist"
	if (!res.ok) {
		return NextResponse.json(
		{ message: data?.error?.message || 'Gagal memulai quiz' },
		{ status: res.status }
	)}

	// 4️⃣ Quiz berhasil dimulai
	return NextResponse.json({
			success: true,
			data,
			from: 'start'
		})
	}