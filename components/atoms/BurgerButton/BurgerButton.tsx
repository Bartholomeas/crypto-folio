import useReduxDispatch from '../../../hooks/useReduxDispatch';
import { uiActions } from '../../../state/uiSlice';

interface Props {
	onClickFn: () => void;
}

const BurgerButton = ({ onClickFn }: Props) => {
	const toggleNavbar = useReduxDispatch();

	return (
		<button
			className='flex flex-col column gap-2 w-[40px] h-[40px] justify-center cursor-pointer md:hidden'
			onClick={onClickFn}>
			<span className='bg-font rounded w-full h-[4px]' />
			<span className='bg-font rounded w-full h-[4px]' />
		</button>
	);
};

export default BurgerButton;
