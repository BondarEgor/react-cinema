import { useQuery } from 'react-query'
import { fetchUserCredentials } from '../pages/ProfilePage/utils'

export const useUserCredentials = () => {
	return useQuery('user-cred',fetchUserCredentials )
}