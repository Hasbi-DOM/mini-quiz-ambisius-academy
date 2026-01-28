import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Quiz from '../page'

export default async function QuizPage({ params }) {
	const { session_id } = await params
	const cookieStore = await cookies()
	const token = cookieStore.get('access_token')?.value
	if (!token) redirect('/')

	
	const res = await fetch(
	`${process.env.BACKEND_API_URL}/quiz/start/${session_id}`,
		{
			headers: { 
				Authorization: `Bearer ${token}`
			},
			cache: 'no-store'
		}
	)
	const result = await res.json()
	const quiz = result.data
	return <Quiz data={quiz} />
}
