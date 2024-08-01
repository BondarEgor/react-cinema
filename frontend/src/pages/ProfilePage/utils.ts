export const fetchUserInfo = async () => {
	const url = `${process.env.REACT_APP_API_BASE_URL}/userinfo`
	const response = await fetch(url)
	const userInfo = await response.json()

	return userInfo
}


export const fetchUserSocials = async () => {
	const url = `${process.env.REACT_APP_API_BASE_URL}/socials`
	const response = await fetch(url)
	const userInfo = await response.json()

	return userInfo
}

export const fetchUserCredentials = async () => {
	const url = `${process.env.REACT_APP_API_BASE_URL}/creds`
	const response = await fetch(url)
	const userInfo = await response.json()

	return userInfo
}
