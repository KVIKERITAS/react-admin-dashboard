import React, { createContext, useState } from 'react'

type TInitialState = {
	chat: boolean
	cart: boolean
	userProfile: boolean
	notification: boolean
}

type TStateContext = {
	activeMenu: boolean
	setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
	isClicked: TInitialState
	setIsClicked: React.Dispatch<React.SetStateAction<TInitialState>>
	handleClick: (clicked: string) => void
	screenSize: number | undefined
	setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>
}

export const StateContext = createContext<TStateContext | undefined>(undefined)

const initialState: TInitialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
}

export const ContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [activeMenu, setActiveMenu] = useState(true)
	const [isClicked, setIsClicked] = useState(initialState)
	const [screenSize, setScreenSize] = useState<number | undefined>(undefined)

	const handleClick = (clicked: string) =>
		setIsClicked({ ...initialState, [clicked]: true })

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
			}}
		>
			{children}
		</StateContext.Provider>
	)
}
