import { useQuery } from 'react-query'
import { fetchUserInfo } from '../pages/ProfilePage/utils'

export interface IUserInfo {
	name: string | undefined
	job: string | undefined
	origin: string | undefined
	poster: string | undefined
}

export const useUserInfo = () => {
	return useQuery<IUserInfo>('user-info', fetchUserInfo)
}