import { cookies } from "next/headers"
import { Header } from "../_components/layout/header"
import ProfileProvider from "../context/profile-context"

async function getProfile() {
	const token = (await cookies()).get('access_token')?.value

	const res = await fetch(
		`${process.env.BACKEND_API_URL}/auth/profile`,
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	)

	if (!res.ok) return null
	return res.json()
}
export default async function MainLayout({ children }) {
	const profile = await getProfile()
	return (
	<ProfileProvider value={profile}>
		<Header />
		<main className="px-8 py-24">
			{children}
		</main>
	</ProfileProvider>
	)
}