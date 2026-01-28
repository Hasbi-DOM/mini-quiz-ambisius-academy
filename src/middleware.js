import { NextResponse } from 'next/server'

export function middleware(request) {
	const token = request.cookies.get('access_token')?.value
	const { pathname, searchParams } = request.nextUrl

	if (!token && pathname.startsWith('/main')) {
		return NextResponse.redirect(new URL('/', request.url))
	}

	if (token && pathname === '/') {
		return NextResponse.redirect(new URL('/main/dashboard', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/main/:path*', '/main']
}