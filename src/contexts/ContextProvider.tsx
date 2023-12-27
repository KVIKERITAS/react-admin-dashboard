import React, { Dispatch, SetStateAction, createContext, useState } from 'react'

type TStateContext = {
	activeMenu: boolean
	setActiveMenu: Dispatch<SetStateAction<boolean>>
}

export const StateContext = createContext<TStateContext | undefined>(undefined)

export const ContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [activeMenu, setActiveMenu] = useState(true)

	return (
		<StateContext.Provider value={{ activeMenu, setActiveMenu }}>
			{children}
		</StateContext.Provider>
	)
}
