import { useContext } from 'react'
import { StateContext } from '../contexts/ContextProvider'

export const useStateContext = () => {
	const state = useContext(StateContext)

	if (state === undefined) {
		throw new Error('useStateContext must be used with a StateContext')
	}

	return state
}
