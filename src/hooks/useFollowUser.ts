import { useCallback, useState } from 'react'

export const useFollowUser = (initValue: boolean) => {
	const [isFollowed, setIsFollowed] = useState(initValue)

	const handleOnFollow = useCallback(() => {
		setIsFollowed(current => !current)
	}, [])

	return {
		isFollowed,
		handleOnFollow
	}
}