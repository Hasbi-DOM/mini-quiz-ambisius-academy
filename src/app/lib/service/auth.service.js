export const login = (data) =>
	fetch('/api/v1/auth/login', {
		method: 'POST',
		body: JSON.stringify(data)
	})

export const logout = () =>
	fetch('/api/auth/logout', { method: 'POST' })