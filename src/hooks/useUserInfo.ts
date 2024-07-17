import { useQueries } from 'react-query'
import { fetchUserCredentials, fetchUserInfo, fetchUserSocials } from '../pages/ProfilePage/utils'
export interface IUserInfo {
	name: string;
	job: string;
	origin: string;
	poster: string
}
export interface IUserCredentials {
	name: string;
	value: string
}
export interface IUserSocials {
	icon: string
	link: string
}

export const useUserInfo = () => {
	const resultInfo = useQueries([
		{ queryKey: 'user-info', queryFn: fetchUserInfo },
		{ queryKey: 'user-cred', queryFn: fetchUserCredentials },
		{ queryKey: 'user-socials', queryFn: fetchUserSocials },
	])
	const isLoading = resultInfo.some(request => request.isLoading)
	const isError = resultInfo.some(request => request.isError)
	
	const userInfo = resultInfo[0].data as IUserInfo
	const userCredentials = resultInfo[1].data as IUserCredentials[]
	const userSocials = resultInfo[2].data as IUserSocials[]

	return {isLoading, isError, userInfo, userCredentials, userSocials}

}
