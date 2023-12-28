import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../hooks/useStateContext'

type TNavButtonProps = {
	title: string
	customFn: () => void
	icon: React.ReactNode
	color: string
	dotColor?: string
}

const NavButton = ({
	title,
	customFn,
	icon,
	color,
	dotColor,
}: TNavButtonProps) => (
	<TooltipComponent content={title} position='BottomCenter'>
		<button
			type='button'
			onClick={customFn}
			style={{ color }}
			className='relative text-xl rounded-full p-3 hover:bg-light-gray'
		>
			<span
				style={{ background: dotColor }}
				className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
			/>
			{icon}
		</button>
	</TooltipComponent>
)

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		setIsClicked,
		handleClick,
		screenSize,
		setScreenSize,
	} = useStateContext()

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [setScreenSize])

	useEffect(() => {
		if (screenSize && screenSize <= 900) {
			setActiveMenu(false)
		} else {
			setActiveMenu(true)
		}
	}, [screenSize, setActiveMenu])

	return (
		<div className='flex justify-between p2 md:mx-6 relative'>
			<NavButton
				title='Menu'
				customFn={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}
				color='blue'
				icon={<AiOutlineMenu />}
			/>

			<div className='flex'>
				<NavButton
					title='Cart'
					customFn={() => handleClick('cart')}
					color='blue'
					icon={<FiShoppingCart />}
				/>
				<NavButton
					title='Chat'
					customFn={() => handleClick('chat')}
					color='blue'
					icon={<BsChatLeft />}
					dotColor='#03C9D7'
				/>
				<NavButton
					title='Notifications'
					customFn={() => handleClick('notification')}
					color='blue'
					icon={<RiNotification3Line />}
					dotColor='#03C9D7'
				/>
				<TooltipComponent content='Profile' position='BottomCenter'>
					<div
						className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
						onClick={() => handleClick('userProfile')}
					>
						<img className='rounded-full w-8 h-8' />
						<p>
							<span className='text-gray-400 text-14'>Hi, </span>{' '}
							<span className='text-gray-400 font-bold ml-1 text-14'>
								Username
							</span>
						</p>
						<MdKeyboardArrowDown className='text-gray-400 text-14' />
					</div>
				</TooltipComponent>
				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	)
}

export default Navbar
