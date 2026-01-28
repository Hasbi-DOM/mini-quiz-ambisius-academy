import { NextResponse } from 'next/server'

export async function POST(req) {
	const { email, password } = await req.json()

	const res = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({email, password})
	})
	if(!res.ok) {
		return NextResponse.json(
			{ message: 'Invalid Credentials'},
			{ status: 401}
		)
	}
	const {data} = await res.json()
	const {access_token, refresh_token, expires_in} = data
	const resJson = NextResponse.json({success: true})

	resJson.cookies.set('access_token', access_token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		path: '/',
		maxAge: expires_in
	})

	return resJson
}