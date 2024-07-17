import { useQueries, useQuery } from 'react-query'
import { fetchUserInfo, fetchUserSocials } from '../pages/ProfilePage/utils'

export interface IUserSocials {
	name: string
	value: string
}

export const useUserSocials = () => {
	return useQuery<IUserSocials[]>('user-socials', fetchUserSocials)
}
