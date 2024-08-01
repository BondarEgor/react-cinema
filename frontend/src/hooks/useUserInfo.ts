import { useQueries } from 'react-query'
import { fetchUserCredentials, fetchUserInfo, fetchUserSocials } from '../pages/ProfilePage/utils'

export interface IUserInfo {
	name: string
	job: string
	origin: string
	poster: string
	isLoading: boolean
}
export interface IUserCredentials {
	name: string
	value: string
}
export interface IUserSocials {
	icon: string
	link: string
}

const delayedFetch = (fetchFn: any, delay: any) => {
	return () => new Promise(resolve => {
		setTimeout(() => {
			resolve(fetchFn())
		}, delay)
	})
}

export const useUserInfo = () => {
	const resultInfo = useQueries([
		{ queryKey: 'user-info', queryFn: delayedFetch(fetchUserInfo, 2000) },
		{ queryKey: 'user-cred', queryFn: delayedFetch(fetchUserCredentials, 2000) },
		{ queryKey: 'user-socials', queryFn: delayedFetch(fetchUserSocials, 2000) },
	])

	const isLoading = resultInfo.some(request => request.isLoading)
	const isError = resultInfo.some(request => request.isError)

	const userInfo = resultInfo[0].data as IUserInfo
	const userCredentials = resultInfo[1].data as IUserCredentials[]
	const userSocials = resultInfo[2].data as IUserSocials[]

	return { isLoading, isError, userInfo, userCredentials, userSocials }
}
