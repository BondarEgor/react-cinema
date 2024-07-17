import { useUserSocials } from '../../../hooks/useUserSocials'

export default function Socials() {
	const { data, isLoading, isError } = useUserSocials()

	if (isLoading) return <p>Loading...</p>
	if (isError) return <p>Error...</p>

	}