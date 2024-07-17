import { useQuery } from 'react-query'
import { fetchUserSocials } from '../pages/ProfilePage/utils'

export interface IUserSocials {
	name: string
	value: string
}

export const useUserSocials = () => {
	return useQuery<IUserSocials[]>('user-socials', fetchUserSocials)
}