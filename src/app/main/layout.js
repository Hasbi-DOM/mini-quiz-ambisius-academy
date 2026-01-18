import { Header } from "../_components/layout/header"

export default function MainLayout({ children }) {
	return (
	<>
		<Header />
		<main className="px-8 py-24">
			{children}
		</main>
	</>
	)
}