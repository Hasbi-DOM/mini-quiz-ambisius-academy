import { cookies } from 'next/headers'

export function getAccessToken() {
	return cookies().get('access_token')?.value
}